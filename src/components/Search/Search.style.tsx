import styled from 'styled-components';

export const SearchToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 4px;
  width: 450px;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    margin-bottom: 8px;
  }
`;

export const SearchPrimarybtn = styled.header`
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  background: transparent;
  padding: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  color: #888;
  font-size: 20px;
  cursor: pointer;
  margin-right: 8px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FilterSelect = styled.select`
  flex: 1;
  margin-left: 8px;
  border: none;
  background-color: transparent;
  color: #555;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
