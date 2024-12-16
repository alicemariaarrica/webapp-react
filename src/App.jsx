
import { BrowserRouter as Router } from 'react-router-dom';
import CreateRoutes from './routes/AllRoutes.jsx';
import CreateDefaultLayout from './layout/DefaultLayout.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <CreateRoutes />
      </div>
    </Router>
  );
}

export default App;

