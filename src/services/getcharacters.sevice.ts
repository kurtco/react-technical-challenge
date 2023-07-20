import { CharacterData } from '../domain/interfaces/characters.interface';
import { HttpMethods, HttpStatus } from '../domain/enums/httpRequest.enum';
import { HttpResponse } from '../domain/interfaces/httpRequest.interface';
import { SearchCardLabels } from '../domain/enums/search.enum';

const API_URL = 'https://rickandmortyapi.com/graphql';

export const getAllCharactersByPage = async (pageNumber: number, search: string, orderBy: string): Promise<HttpResponse<CharacterData[] | []>> => {

  const query = `
    query Characters($name: String, $page: Int) {
      characters(filter: { name: $name }, page: $page) {
        results {
          id
          name
          status
          species
          image
        }
      }
    }
  `;

  try {
    const response = await fetch(API_URL, {
      method: HttpMethods.POST,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables: { name: search, page: pageNumber },
      }),
    });

    const { data, errors } = await response.json();

    if (errors) {
      return {
        status: HttpStatus.NOT_FOUND,
      };
    }

    if(SearchCardLabels.ORDERBYSPECIEVALUE.toLowerCase() === orderBy?.toLowerCase()){
      const sortedResults = data.characters.results.sort((a: CharacterData, b: CharacterData) => {
        return String(a.species).localeCompare(b.species);
      });
      return sortedResults;
    }

    if(SearchCardLabels.ORDERTITLEVALUE.toLowerCase () === orderBy?.toLowerCase()){
      const sortedResults = data.characters.results.sort((a: CharacterData, b: CharacterData) => {
        return String(a.name).localeCompare(b.name);
      });
      return sortedResults;
    }


    return data.characters.results;
    
  } catch (error) {
    return {
      status: HttpStatus.NOT_FOUND,
    };
  }

};