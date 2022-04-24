import { ChangeEvent, useContext } from 'react';
import { VolumeOffIcon, VolumeUpIcon } from '@heroicons/react/outline';
import PlayerContext from '../../context/player';
import ButtonRound from '../ButtonRound';
import useAudio from '../../hooks/use-audio';

const FooterGlobalControls = () => {
  const { audioElement } = useContext(PlayerContext);
  const { volume, setVolume, muted, toggleMuted } = useAudio();

  const onVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    audioElement.volume = parseInt(e.target.value, 10) / 100;
    // TODO: save volume to settings DB (debounced)
  };

  return (
    <div className="flex">
      <ButtonRound
        icon={muted ? VolumeOffIcon : VolumeUpIcon}
        onClick={toggleMuted}
      />
      <input type="range" value={volume} onChange={onVolumeChange} />
    </div>
  );
};

export default FooterGlobalControls;
