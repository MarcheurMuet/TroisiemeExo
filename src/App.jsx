import { Routes, Route, NavLink } from 'react-router';
import './App.css';
import Home from './components/Home';
import Game from './components/GamePage';
import GameFilter from './components/GameFilter';
import GameSearch from './components/GameSearch';
import Favorites from './components/Favorites';

function App() {
  return (
      <div className="App">
        <nav className='navbar'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
            </NavLink>
            <NavLink to="/game" className={({ isActive }) => (isActive ? 'active' : '')}>
            Jeux
            </NavLink>
            <NavLink to="/gamefilter" className={({ isActive }) => (isActive ? 'active' : '')}>
            Filter
            </NavLink>
            <NavLink to="/gamesearch" className={({ isActive }) => (isActive ? 'active' : '')}>
            Rechercher
            </NavLink>
            <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>
            Favoris
            </NavLink>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gamefilter" element={<GameFilter />} />
        <Route path="/gamesearch" element={<GameSearch />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
