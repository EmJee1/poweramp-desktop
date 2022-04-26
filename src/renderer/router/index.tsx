import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Settings from '../views/Settings';
import Artist from '../views/Artist';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Album from '../views/Artist/Album';
import Layout from '../components/Layout';

const Router = () => {
  return (
    <MemoryRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/artist/:artist" element={<Artist />} />
          <Route path="/artist/:artist/album/:album" element={<Album />} />
        </Routes>
      </Layout>
      <Footer />
    </MemoryRouter>
  );
};

export default Router;
