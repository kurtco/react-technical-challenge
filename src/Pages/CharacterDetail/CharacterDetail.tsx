import DetailToolbar from '../../components/DetailToolBar';
import Exception from '../../components/Exception';
import Loader from '../../components/Loader';
import React, { ReactElement, useEffect, useState } from 'react';
import { BackGroundColor, ExceptionCardLabels } from '../../domain/enums/exception.enum';
import {
  CharacterCardContainer,
  CharacterDescription,
  CharacterDetailItem,
  CharacterDetails,
  CharacterImage,
  CharacterName
  } from './CharacterDetail.style';
import { CharacterData } from '../../domain/interfaces/characters.interface';
import { CharacterDetailsLabels } from '../../domain/enums/characterDetails.enum';
import { CharacterListContainer } from '../CharacterList/CharacterList.style';
import { getAllCharacterById } from '../../services/getcharacters.sevice';
import { HttpStatus } from '../../domain/enums/httpRequest.enum';
import { useParams } from 'react-router-dom';

export const CharacterDetail = (): ReactElement => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState<CharacterData>();


  useEffect(() => {
    async function fetchData() {
      if (!id) {
        return;
      }

      const data = await getAllCharacterById(id || '');

      if (data?.status && data.status !== HttpStatus.SUCCESS) {
        setError(true);
        setLoading(false);
        return;
      }
      setCharacter(data as CharacterData);
    }

    fetchData();
  }, [id]);


  useEffect(() => {
    setLoading(false);
  }, [character]);

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
      <DetailToolbar />
      <CharacterListContainer key={character?.id}  data-testid="character-detail-page">
        <CharacterCardContainer>
          <CharacterImage src={character?.image} alt={'test'} />
          <CharacterDetails>
            <CharacterName>{character?.name || '-'}</CharacterName>
            <CharacterDescription>
              <CharacterDetailItem>{CharacterDetailsLabels.Species}</CharacterDetailItem> {character?.species || '-'}
            </CharacterDescription>
            <CharacterDescription>
              <CharacterDetailItem>{CharacterDetailsLabels.Type}:</CharacterDetailItem> {character?.type || '-'}
            </CharacterDescription>
            <CharacterDescription>
              <CharacterDetailItem>{CharacterDetailsLabels.Gender}</CharacterDetailItem> {character?.gender || '-'}
            </CharacterDescription>
          </CharacterDetails>
        </CharacterCardContainer>
      </CharacterListContainer>
    </>
  );
}

export default CharacterDetail;