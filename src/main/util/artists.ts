import { Artist, Track, TrackItem } from '../../shared/types';
import db from '../../db/connection';

export const getArtistsFromTracks = (tracks: (Track | TrackItem)[]) => {
  const artistsArray = tracks
    .flatMap((s) => s.artists)
    .filter(Boolean) as string[];

  const artists: Artist[] = [];

  artistsArray.forEach((artist) => {
    const artistEntry = artists.findIndex((a) => a.name === artist);

    if (artistEntry === -1) {
      artists.push({ name: artist, tracksAmount: 1 });
      return;
    }

    artists[artistEntry].tracksAmount += 1;
  });

  return artists;
};

export const getFeaturedArtists = async () => {
  return db.artists.find({}).limit(4).sort({ tracksAmount: -1 });
};

export const updateArtist = async (
  artistName: string,
  artist: Partial<Omit<Artist, 'name' | 'tracksAmount'>>
) => {
  return db.artists.update<Artist>({ name: artistName }, { $set: artist });
};
