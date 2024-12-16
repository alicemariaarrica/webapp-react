import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpecificMoviePage from './pages/SpecificMoviePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<SpecificMoviePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
