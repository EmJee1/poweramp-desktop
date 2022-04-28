import { createContext } from 'react';
import { TrackItem } from '../../shared/types';

export interface IPlayerContext {
  audioElement: HTMLAudioElement;
  currentTrack: TrackItem | null;
  setCurrentTrack: (track?: TrackItem) => Promise<void>;
}

// @ts-expect-error default tracks context value is set in the provider
const PlayerContext = createContext<IPlayerContext>();

export default PlayerContext;
