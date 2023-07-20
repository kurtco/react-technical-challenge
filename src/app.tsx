import CharacterList from './components/CharacterList';
import { CharacterComponetLabels } from './domain/enums/character.enum';
import { CharacterListTitle, CharacterListitle } from './components/CharacterList/CharacterList.style';

function App() {
  return (
    <CharacterListTitle>
      <CharacterListitle>{CharacterComponetLabels.TITLE}</CharacterListitle>
      <CharacterList />
    </CharacterListTitle>
  );
}

export default App;
