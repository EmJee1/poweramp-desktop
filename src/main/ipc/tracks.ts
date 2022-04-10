import db from '../../db/connection';
import { Track } from '../../shared/types';
import { getSettings } from './settings';
import { allowedFiletypes, recursiveLibraryScanDepth } from '../../constants';
import { scanDirectoryRecursively } from '../util/filesystem';

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
};

export const handleTracksGet = async () => {
  return db.tracks.find<Track>({});
};
