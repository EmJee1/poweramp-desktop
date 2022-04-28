import db from '../../db/connection';
import { Track, TrackItem } from '../../shared/types';
import { getSettings } from './settings';
import { allowedFiletypes, recursiveLibraryScanDepth } from '../../constants';
import { scanDirectoryRecursively } from '../util/filesystem';
import { updateCache } from '../util/cache';

export const handleTracksScan = async () => {
  const settings = await getSettings();
  const directory = settings?.audioDirectories?.[0];

  if (!directory) {
    throw new Error('No audio directory configured');
  }

  const fileFilterGlob = allowedFiletypes.map((ext) => `*${ext}`);
  const scanned = await scanDirectoryRecursively(directory, {
    depth: recursiveLibraryScanDepth,
    fileFilter: fileFilterGlob,
  });

  await db.tracks.remove({}, { multi: true });
  await db.tracks.persistence.compactDatafile();
  await db.tracks.insert<Track>(scanned);

  const artists = scanned.flatMap((s) => s.artists).filter(Boolean) as string[];
  await updateCache({ artists });
};

export const handleTracksGet = async () => {
  return db.tracks.find<TrackItem>({});
};
