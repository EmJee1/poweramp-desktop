import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Artist from '../views/Artist';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Router = () => {
  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/artist/:artist" element={<Artist />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
};

export default Router;
