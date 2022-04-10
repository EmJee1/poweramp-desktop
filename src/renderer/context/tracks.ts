import { createContext, Dispatch, SetStateAction } from 'react';
import { Track } from '../../shared/types';

export interface ITracksContext {
  tracks: Track[];
  setTracks: Dispatch<SetStateAction<Track[]>>;
}

// @ts-expect-error default tracks context value is set in the provider
const TracksContext = createContext<ITracksContext>();

export default TracksContext;
