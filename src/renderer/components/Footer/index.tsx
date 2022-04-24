// import { useContext } from 'react';
// import PlayerContext from '../../context/player';
import FooterTrackMetadata from '../FooterTrackMetadata';
import FooterTrackControls from '../FooterTrackControls';

const Footer = () => {
  // const { currentTrack } = useContext(PlayerContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-2">
      <div className="flex justify-between">
        <FooterTrackMetadata />
        <FooterTrackControls />
      </div>
    </div>
  );
};

export default Footer;
