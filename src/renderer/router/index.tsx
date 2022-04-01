import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';

const Router = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
};

export default Router;
