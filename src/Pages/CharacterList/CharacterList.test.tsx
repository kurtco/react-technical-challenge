import CharacterList from './CharacterList';
import React from 'react';
import { CharacterData } from '../../domain/interfaces/characters.interface';
import { ExceptionCardLabels } from '../../domain/enums/exception.enum';
import { getAllCharactersByPage } from '../../services/getcharacters.sevice';
import { HttpStatus } from '../../domain/enums/httpRequest.enum';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundCardLabels } from '../../domain/enums/notFound.enum';
import { render, screen, waitFor } from '@testing-library/react';

const mockCharacterData: CharacterData[] = [
    {
        id: 1,
        name: 'Rick Sanchez',
        species: 'Human',
        image: 'rick.png',
    },
];
jest.mock('../../services/getcharacters.sevice');


describe('(unit) Character List Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Given that the user wants to open the app to see the Rick and Morty characters', () => {
        describe('When the app loads for the very first time', () => {
            test('Then the Character List component should render correctly with character cards, including the pagination component', async () => {
                (getAllCharactersByPage as jest.Mock).mockResolvedValueOnce(mockCharacterData);

                render(
                    <MemoryRouter>
                        <CharacterList />
                    </MemoryRouter>
                );

                await waitFor(() => {
                    expect(screen.getByText(mockCharacterData[0].name)).toBeInTheDocument();
                });

                expect(screen.getByText(mockCharacterData[0].species)).toBeInTheDocument();
                expect(screen.getByTestId('pagination-component')).toBeInTheDocument();
            });
        });
        describe('When the user wants to see a character that does not exist', () => {
            test('Then the Character List component should render the "NotFound" component', async () => {
                (getAllCharactersByPage as jest.Mock).mockResolvedValueOnce([]);

                render(
                    <MemoryRouter>
                        <CharacterList />
                    </MemoryRouter>
                );

                expect(await screen.findByTestId('not-found-component')).toBeInTheDocument();

                expect(screen.getByText(NotFoundCardLabels.DEFAULT)).toBeInTheDocument();
            });
        });

        describe('When the there is a server error', () => {
            test('Then the Character List component should render the "Exception" component', async () => {
                (getAllCharactersByPage as jest.Mock).mockResolvedValueOnce({ status: HttpStatus.INTERNAL_SERVER_ERROR });

                render(
                    <MemoryRouter>
                        <CharacterList />
                    </MemoryRouter>
                );

                await waitFor(() => {
                    expect(screen.getByText(ExceptionCardLabels.DEFAULT)).toBeInTheDocument();
                });

                expect(screen.getByTestId('exception-component')).toBeInTheDocument();
            });
        });
    });
});
