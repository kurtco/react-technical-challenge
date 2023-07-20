import React from 'react'
import { DetailToolbarContainer, Title, BackButton } from './DetailToolbar.style';
import { DetailToolbarLabel } from '../domain/enums/character.enum';
import { Link } from 'react-router-dom'; // Importa el componente Link



export function DetailToolbar() {
    return (
        <DetailToolbarContainer>
            <BackButton>
                <Link to={'/'}>{DetailToolbarLabel.BACK}</Link>
            </BackButton>
            <Title>{DetailToolbarLabel.TITLE}</Title>
        </DetailToolbarContainer>
    );
}
export default DetailToolbar;