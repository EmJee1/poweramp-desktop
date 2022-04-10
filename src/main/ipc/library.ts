import readdirp from 'readdirp';
import { allowedFiletypes } from '../../constants';
import { Track } from '../../shared/types';
import { getSettings } from './settings';
import db from '../../db/connection';

export const handleLibraryScan = async () => {
  const settings = await getSettings();
  const audioDirectory = settings?.audioDirectories?.[0];

  if (!audioDirectory) {
    throw new Error('No audio directory configured');
  }

  const scannedFiles: Track[] = [];

  const fileFilter = allowedFiletypes.map((ext) => `*${ext}`);

  // eslint-disable-next-line no-restricted-syntax
  for await (const entry of readdirp(audioDirectory, {
    fileFilter,
  })) {
    scannedFiles.push({ path: entry.fullPath });
  }

  await db.tracks.remove({}, { multi: true });
  await db.tracks.persistence.compactDatafile();
  await db.tracks.insert<Track>(scannedFiles);

  return scannedFiles;
};
