import { useContext } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/outline';
import ButtonRound from '../ButtonRound';
import PlayerContext from '../../context/player';
import useAudio from '../../hooks/use-audio';

const FooterTrackControls = () => {
  const { audioElement, currentTrack } = useContext(PlayerContext);
  const { playing } = useAudio();

  const togglePlay = () =>
    playing ? audioElement.pause() : audioElement.play();

  return (
    <div className="flex flex-col">
      <div className="flex">
        <ButtonRound
          icon={playing ? PauseIcon : PlayIcon}
          disabled={!currentTrack}
          onClick={togglePlay}
        />
      </div>
    </div>
  );
};

export default FooterTrackControls;
