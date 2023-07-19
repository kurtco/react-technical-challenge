import styled from "styled-components";

export const MediaCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    margin: 6px;

`;

export const ThumbailImage = styled.img `
    width: 100%;
    height: auto;
    border-radius: 8px;
`

export const MediaCardThumbnail =  styled.div`
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
`;

export const MediaCardContent = styled.div`
    margin-left: 16px;
`;

export const MediaCardDescription  = styled.p`
    margin-top: 8px;
`;
export const MediaCardTitle = styled.h2 `
    font-size: 20px;
    margin: 0;
`

export const CharacterContainer = styled.div`
    padding: 5px;
    align-text: center
`;


export const CharacterSquareImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 50px;
`;

