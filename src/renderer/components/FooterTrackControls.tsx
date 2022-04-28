import { useContext } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/outline';
import ButtonRound from './ButtonRound';
import PlayerContext from '../context/player';
import useAudio from '../hooks/use-audio';

const FooterTrackControls = () => {
  const { audioElement, currentTrack } = useContext(PlayerContext);
  const { playing, duration, currentTime } = useAudio();

  const togglePlay = () =>
    playing ? audioElement.pause() : audioElement.play();

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <ButtonRound
          icon={playing ? PauseIcon : PlayIcon}
          disabled={!currentTrack}
          onClick={togglePlay}
          small
        />
      </div>
      <input type="range" min={0} max={duration} value={currentTime} />
    </div>
  );
};

export default FooterTrackControls;
