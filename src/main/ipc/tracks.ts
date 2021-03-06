import { IpcMainInvokeEvent } from 'electron';
import db from '../../db/connection';
import { Artist, Track, TrackItem } from '../../shared/types';
import { getSettings } from './settings';
import { allowedFiletypes, recursiveLibraryScanDepth } from '../../constants';
import { scanDirectoryRecursively } from '../util/filesystem';
import { getArtistsFromTracks } from '../util/artists';

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

  const artists = getArtistsFromTracks(scanned);

  await db.artists.remove({}, { multi: true });
  await db.artists.persistence.compactDatafile();
  await db.artists.insert<Artist>(artists);
};

export const handleArtistTracksGet = async (
  _event: IpcMainInvokeEvent,
  artist: string
) => {
  return db.tracks.find<TrackItem>({ artists: { $elemMatch: artist } });
};

export const handleAlbumTracksGet = async (
  _event: IpcMainInvokeEvent,
  albumartist: string,
  album: string
) => {
  return db.tracks
    .find<TrackItem>({ albumartist, album })
    .sort({ trackNumber: 1 });
};
