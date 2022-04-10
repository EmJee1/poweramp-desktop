import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';

const Router = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MemoryRouter>
  );
};

export default Router;
