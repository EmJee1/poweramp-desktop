import { createContext } from 'react';
import { Track } from '../../shared/types';

export interface IPlayerContext {
  audioElement: HTMLAudioElement;
  currentTrack: Track | null;
  setCurrentTrack: (track?: Track) => Promise<void>;
}

// @ts-expect-error default tracks context value is set in the provider
const PlayerContext = createContext<IPlayerContext>();

export default PlayerContext;
