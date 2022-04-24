import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TracksContext from '../../context/tracks';
import useArtists from '../../hooks/use-artists';
import { Track } from '../../../shared/types';
import PlayerContext from '../../context/player';

const Home = () => {
  const { tracks } = useContext(TracksContext);
  const { audioElement } = useContext(PlayerContext);
  const { artists } = useArtists();

  const onTrackClick = (track: Track) => {
    audioElement.src = `poweramp://${track.path}`;
    audioElement.play();
  };

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
          onClick={() => onTrackClick(track)}
        >
          {track.albumartist} : {track.title}
        </button>
      ))}
    </div>
  );
};

export default Home;
