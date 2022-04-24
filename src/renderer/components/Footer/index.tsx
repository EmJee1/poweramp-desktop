import { useContext } from 'react';
import PlayerContext from '../../context/player';

const Footer = () => {
  const { currentTrack } = useContext(PlayerContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2">
      {currentTrack && (
        <div>
          <h5>{currentTrack.title}</h5>
          <p>{currentTrack.artists?.join(', ')}</p>
        </div>
      )}
      {!currentTrack && (
        <div>
          <h5>No track selected</h5>
          <p>-</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
