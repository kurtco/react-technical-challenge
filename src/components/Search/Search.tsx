import { SearchCardLabels } from '../../domain/enums/search.enum';
import {
    FilterSelect,
    SearchBarContainer,
    SearchButton,
    SearchInput,
    SearchToolbarContainer
    } from './Search.style';
import { ChangeEvent, ReactElement, useState } from 'react';

interface SearchProps {
    searchHandle: (search: string) => void;
    orderByHandle: (order: string) => void;
}

export function Search({
    searchHandle,
    orderByHandle
}: SearchProps): ReactElement {

    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchHandle(searchValue);
        }
    };

    const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if(e?.target?.value !== ''){
            orderByHandle(e?.target.value);;
        };
      };
    

    const handleButtonClick = () => {
        searchHandle(searchValue);
    };

    return (
        <SearchToolbarContainer>
            <SearchBarContainer>
                <SearchInput
                    type="text"
                    placeholder={SearchCardLabels.PLACEHOLDER}
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={handleButtonClick}
                />
                <SearchButton onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#888" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
                    </svg>
                </SearchButton>
            </SearchBarContainer>
            <FilterSelect onChange={handleOrderChange}>
                <option disabled selected value="">{SearchCardLabels.SELECTDEFAULTSELECTION}</option>
                <option value={SearchCardLabels.ORDERTITLEVALUE}>{SearchCardLabels.ORDERBYTITLE}</option>
                <option value={SearchCardLabels.ORDERBYSPECIEVALUE}>{SearchCardLabels.ORDERBYSPECIE}</option>
            </FilterSelect>
        </SearchToolbarContainer>

    );
}

export default Search;
