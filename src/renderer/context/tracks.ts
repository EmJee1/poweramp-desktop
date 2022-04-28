import { createContext, Dispatch, SetStateAction } from 'react';
import { TrackItem } from '../../shared/types';

export interface ITracksContext {
  tracks: TrackItem[];
  setTracks: Dispatch<SetStateAction<TrackItem[]>>;
}

// @ts-expect-error default tracks context value is set in the provider
const TracksContext = createContext<ITracksContext>();

export default TracksContext;
