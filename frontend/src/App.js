import './App.css';
import Web from './components/Web';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Router>
              <Web/>
          </Router>
        </div>
  );
}

export default App;
