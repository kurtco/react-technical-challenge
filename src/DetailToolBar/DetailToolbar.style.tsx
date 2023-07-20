import styled from 'styled-components';

export const DetailToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #000;
  margin: 0;
  flex: 1;
`;

export const BackButton = styled.button`
  border: none;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  margin-right: 50px;
`;
