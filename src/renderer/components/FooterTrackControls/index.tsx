import { useContext } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/outline';
import ButtonRound from '../ButtonRound';
import PlayerContext from '../../context/player';
import useCurrentTrack from '../../hooks/use-current-track';

const FooterTrackControls = () => {
  const { audioElement } = useContext(PlayerContext);
  const { playing } = useCurrentTrack();

  const togglePlay = () =>
    playing ? audioElement.pause() : audioElement.play();

  return (
    <div>
      <ButtonRound icon={playing ? PauseIcon : PlayIcon} onClick={togglePlay} />
    </div>
  );
};

export default FooterTrackControls;
