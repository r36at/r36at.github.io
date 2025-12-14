import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Biography from './components/pages/Biography';
import Help from './components/pages/Help';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/biography">Biography</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
