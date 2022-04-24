import { createContext, Dispatch, SetStateAction } from 'react';
import { Track } from '../../shared/types';

export interface IPlayerContext {
  audioElement: HTMLAudioElement;
  currentTrack: Track | null;
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
}

// @ts-expect-error default tracks context value is set in the provider
const PlayerContext = createContext<IPlayerContext>();

export default PlayerContext;
