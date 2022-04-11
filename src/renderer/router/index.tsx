import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Artist from '../views/Artist';

const Router = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/artist/:artist" element={<Artist />} />
      </Routes>
    </MemoryRouter>
  );
};

export default Router;
