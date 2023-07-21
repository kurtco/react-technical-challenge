import CharacterDetail from './CharacterDetail';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CharacterData } from '../../domain/interfaces/characters.interface';

const mockCharacterData: CharacterData = {
  id: 1,
  name: 'Rick Sanchez',
  species: 'Human',
  type: 'Scientist',
  gender: 'Male',
  image: 'rick.png',
};

describe('(unit) Character Detail Component', () => {
  beforeAll(() => {
    jest.mock('../../services/getcharacters.sevice', () => ({
      getAllCharacterById: jest.fn(() => Promise.resolve(mockCharacterData)),
    }));
  });

  describe('Given that the user clicks on a character in the list page', () => {
    describe('When the  character detail page is loaded', () => {
      test('Then the Character Detail component should render correctly with character details', async () => {
        render(
          <MemoryRouter initialEntries={['/detail/1']}>
            <Routes>
              <Route path="/detail/:id" element={<CharacterDetail />} />
            </Routes>
          </MemoryRouter>
        );

        await waitFor(() => {
          expect(screen.getByText(mockCharacterData.name)).toBeInTheDocument();

        });

        expect(screen.getByTestId('character-detail-page')).toBeInTheDocument()
        expect(screen.getByText(mockCharacterData.species)).toBeInTheDocument();
      });
    });
  });
});


