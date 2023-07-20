import Character from '../../components/Characters';
import Exception from '../../components/Exception';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import { BackGroundColor, ExceptionCardLabels } from '../../domain/enums/exception.enum';
import { CharacterListTitle, CharacterListContainer } from './CharacterList.style';
import { getAllCharactersByPage } from '../../services/getcharacters.sevice';
import { HttpStatus } from '../../domain/enums/httpRequest.enum';
import { ReactElement, useEffect, useState } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import { CharacterComponetLabels } from '../../domain/enums/character.enum';


export function CharacterList(): ReactElement {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState<CharacterData[] | []>([]);
  const [paginationPage, setPaginationPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("")
  const [orderBy, setOrderBy] = useState<string>("")

  useEffect(() => {
    async function fetchData() {
      const data = await getAllCharactersByPage(paginationPage, search, orderBy)

      if (data?.status && data.status !== HttpStatus.SUCCESS) {
        setError(true)
        setLoading(false);
        return
      }

      setCharacters(data as CharacterData[]);
      setLoading(false);
    }

    fetchData();
  }, [paginationPage, search, orderBy]);

  if (loading) return (
    <CharacterListContainer>
      <Loader />
    </CharacterListContainer>
  )

  if (error) return (
    <CharacterListContainer>
      <Exception message={ExceptionCardLabels.DEFAULT} backGroundColor={BackGroundColor.ERROR} />
    </CharacterListContainer>
  )

  return (
    <>
      <CharacterListContainer>
        <CharacterListTitle>{CharacterComponetLabels.TITLE}</CharacterListTitle>
        <Search searchHandle={setSearch} orderByHandle={setOrderBy} />

        {characters?.length === 0 ? (
          <NotFound />
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
        {!loading && !error && characters?.length > 0 &&
          <Pagination page={paginationPage} setPage={setPaginationPage} />
        }
    </>
  );
}

export default CharacterList;
