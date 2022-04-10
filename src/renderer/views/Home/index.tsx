import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TracksContext from '../../context/tracks';

const Home = () => {
  const { tracks } = useContext(TracksContext);

  return (
    <div>
      <h1>Poweramp</h1>
      <Link to="/settings">Settings</Link>
      <h4>Tracks:</h4>
      {tracks.map((track) => (
        <p key={track.path}>
          {track.albumartist} : {track.title}
        </p>
      ))}
    </div>
  );
};

export default Home;
