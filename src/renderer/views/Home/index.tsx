import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TracksContext from '../../context/tracks';
import useArtists from '../../hooks/use-artists';
import PlayerContext from '../../context/player';

const Home = () => {
  const { tracks } = useContext(TracksContext);
  const { setCurrentTrack } = useContext(PlayerContext);
  const { artists } = useArtists();

  return (
    <div>
      <h4>Artists:</h4>
      {artists.map((artist) => (
        <Link to={`/artist/${artist}`} key={artist}>
          {artist}
        </Link>
      ))}
      <h4>Tracks:</h4>
      {tracks.map((track) => (
        <button
          type="button"
          className="block"
          key={track.path}
          onClick={() => setCurrentTrack(track)}
        >
          {track.albumartist} : {track.title}
        </button>
      ))}
    </div>
  );
};

export default Home;
