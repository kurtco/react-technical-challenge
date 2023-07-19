import { ReactElement, useState } from "react";
import './Search.css'; // Import the CSS file
import { SearchBarContainer, SearchToolbarContainer } from "./Search.style";


interface SearchProps {
    searchHandle: (search: string) => void;
}

export function Search({
    searchHandle,
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

    const handleButtonClick = () => {
        searchHandle(searchValue);
    };

    return (
        <SearchToolbarContainer>
            <SearchBarContainer>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={handleButtonClick}
                />
                <button className="search-button" onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#888" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
                    </svg>
                </button>
            </SearchBarContainer>
            <select className="filter-select">
                <option disabled selected value="">Order by</option>
                <option value="name">Title</option>
                <option value="Specie">Specie</option>
            </select>
        </SearchToolbarContainer>

    );
}

export default Search;
