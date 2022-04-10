import readdirp, { ReaddirpOptions } from 'readdirp';
import { Track } from '../../shared/types';

export const scanDirectoryRecursively = async (
  directory: string,
  options: ReaddirpOptions
) => {
  const scannedFiles: Track[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const entry of readdirp(directory, options)) {
    scannedFiles.push({ path: entry.fullPath });
  }

  return scannedFiles;
};
