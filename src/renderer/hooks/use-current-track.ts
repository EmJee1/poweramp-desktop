import { useContext, useState } from 'react';
import PlayerContext from '../context/player';

const useCurrentTrack = () => {
  const { audioElement } = useContext(PlayerContext);
  const [playing, setPlaying] = useState(!audioElement.paused);

  audioElement.addEventListener('pause', () => setPlaying(false));
  audioElement.addEventListener('play', () => setPlaying(true));

  return {
    playing,
  };
};

export default useCurrentTrack;
