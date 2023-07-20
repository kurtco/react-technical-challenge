import styled from "styled-components";

export const ExpeptionContainer = styled.div `
    width: 300px;
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    background-color: ${props => props.color};

`;

export const ExpeptionCardHeader = styled.div `
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const ExpeptionCardContent = styled.div `
    font-size: 16px;
`;