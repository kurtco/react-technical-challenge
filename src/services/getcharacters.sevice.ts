import { CharacterData } from '../domain/interfaces/characters.interface';
import { HttpMethods } from '../domain/enums/httpMethods.enum';
import { HttpResponse } from '../domain/interfaces/httpRequest.interface';

const API_URL = 'https://rickandmortyapi.com/graphql';

export const getAllCharactersByPage = async (pageNumber: number, search: string): Promise<HttpResponse<CharacterData[] | []>> => {
  const response = await fetch(API_URL, {
    method: HttpMethods.post,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
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
      `,
      variables: { name: search, page: pageNumber },
    }),
    
  });

  const { data } = await response.json();
  return data.characters.results;
};