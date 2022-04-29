import { Artist, Track, TrackItem } from '../../shared/types';

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
