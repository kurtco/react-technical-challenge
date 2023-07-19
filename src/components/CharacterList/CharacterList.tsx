import Character from '../Characters';
import Pagination from '../Pagination';
import { CharacterListContainer, CharacterListTitle } from './CharacterList.style';
import { getAllCharactersByPage } from '../../services/getcharacters.sevice';
import { ReactElement, useEffect, useState } from 'react';
import Search from '../Search';
import { CharacterListComponetLabels } from '../../domain/enums/character.enum';

export function CharacterList(): ReactElement {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterData[] | []>([]);
  const [paginationPage, setPaginationPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    async function fetchData() {
      const data = await getAllCharactersByPage(paginationPage, search)
      setCharacters(data as CharacterData[]);
      setLoading(false);
    }

    fetchData();
  }, [paginationPage, search]);

  return (
    <>
      <CharacterListTitle> </CharacterListTitle>
      <Search  searchHandle={setSearch} />
      <CharacterListContainer>
        {loading ? (
          <div>{CharacterListComponetLabels.loading}</div>
        ) : (
          <>
            {characters.map((data: any) => (
              <div key={data.id}>
                <Character
                  id={data.id}
                  name={data.name}
                  species={data.species}
                  image={data.image}
                />
              </div>
            ))}
          </>
        )}
      </CharacterListContainer>
      <Pagination page={paginationPage} setPage={setPaginationPage} />
    </>
  );
}

export default CharacterList;
