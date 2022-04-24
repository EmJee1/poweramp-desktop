import { useContext, useMemo, useState } from 'react';
import PlayerContext from '../context/player';

const useAudio = () => {
  const { audioElement } = useContext(PlayerContext);
  const [playing, setPlaying] = useState(!audioElement.paused);
  const [rawVolume, setRawVolume] = useState(audioElement.volume);
  const [muted, setMuted] = useState(audioElement.muted);

  audioElement.addEventListener('pause', () => setPlaying(false));
  audioElement.addEventListener('play', () => setPlaying(true));
  audioElement.addEventListener('volumechange', () =>
    setRawVolume(audioElement.volume)
  );

  const volume = useMemo(() => Number(rawVolume) * 100, [rawVolume]);

  const toggleMuted = () => {
    audioElement.muted = !audioElement.muted;
    setMuted(audioElement.muted);
  };

  /**
   * Sets the audioElement volume
   * @param vol - a number between 0 and 100
   */
  const setVolume = (vol: number) => {
    audioElement.volume = Math.round(vol) / 100;
  };

  return {
    playing,
    volume,
    setVolume,
    muted,
    toggleMuted,
  };
};

export default useAudio;
