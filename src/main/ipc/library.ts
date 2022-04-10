import readdirp from 'readdirp';
import { allowedFiletypes } from '../../constants';
import { getSettings } from './settings';

export const handleLibraryScan = async () => {
  const settings = await getSettings();
  const audioDirectory = settings?.audioDirectories?.[0];

  if (!audioDirectory) {
    throw new Error('No audio directory configured');
  }

  const scannedFiles = [];

  const fileFilter = allowedFiletypes.map((ext) => `*${ext}`);

  // eslint-disable-next-line no-restricted-syntax
  for await (const entry of readdirp(audioDirectory, {
    fileFilter,
  })) {
    scannedFiles.push(entry.path);
  }

  return scannedFiles;
};
