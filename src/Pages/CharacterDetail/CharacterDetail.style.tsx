import styled from 'styled-components';

export const CharacterCardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 16px;
`;

export const CharacterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CharacterDetails = styled.div`
  padding: 16px;
`;

export const CharacterName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CharacterDescription = styled.p`
  font-size: 14px;
  color: #444;
`;

export const CharacterDetailItem = styled.span`
  font-weight: bold;
`;
