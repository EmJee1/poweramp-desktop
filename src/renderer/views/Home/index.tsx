import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TracksContext from '../../context/tracks';
import useArtists from '../../hooks/use-artists';

const Home = () => {
  const { tracks } = useContext(TracksContext);
  const { artists } = useArtists();

  return (
    <div>
      <h1>Poweramp</h1>
      <Link to="/settings">Settings</Link>
      <h4>Artists:</h4>
      {artists.map((artist) => (
        <Link to={`/artist/${artist}`} key={artist}>
          {artist}
        </Link>
      ))}
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
