import CharacterList from './Pages/CharacterList';
import CharacterDetail from './Pages/CharacterDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/detail/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
