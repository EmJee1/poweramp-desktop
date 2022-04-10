import readdirp, { ReaddirpOptions } from 'readdirp';
import { Track } from '../../shared/types';
import { extractMetadata } from './metadata';

/**
 * Recursively scans a directory and adds metadata if available
 * @param directory
 * @param options
 */
export const scanDirectoryRecursively = async (
  directory: string,
  options: ReaddirpOptions
) => {
  const scannedFiles: Track[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for await (const entry of readdirp(directory, options)) {
    const { fullPath } = entry;
    let track: Track = { path: fullPath };

    try {
      const metadata = await extractMetadata(fullPath);
      track = { ...metadata, ...track };
    } catch (err) {
      console.error(err);
    }

    scannedFiles.push(track);
  }

  return scannedFiles;
};
