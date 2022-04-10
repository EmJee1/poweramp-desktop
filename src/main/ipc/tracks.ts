import db from '../../db/connection';
import { Track } from '../../shared/types';

export const handleTracksGet = async () => {
  return db.tracks.find<Track>({});
};
