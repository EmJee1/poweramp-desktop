import { useMemo } from 'react';
import { TrackItem } from '../../shared/types';

export interface Album {
  name?: string;
  trackTotal: number;
  albumartist?: string;
  year?: number;
  cover?: string;
}

const useAlbums = (tracks: TrackItem[]) => {
  const albumDictionary = useMemo(() => {
    const albumsDictionary: Record<string, TrackItem[]> = {};

    tracks.forEach((track) => {
      if (!track.album) return;

      if (!albumsDictionary[track.album]) {
        albumsDictionary[track.album] = [];
      }

      albumsDictionary[track.album].push(track);
    });

    return albumsDictionary;
  }, [tracks]);

  /**
   * Contains an array of albums, every value is used from the first track in the array that has the data.
   * TrackTotal has a fallback on the tracks array length.
   * It comes with the first track _id attached for list keying reasons.
   * Sorted by year (high to low)
   */
  const albums = useMemo<(Album & { _id: string })[]>(() => {
    return Object.entries(albumDictionary)
      .map(([album, albumTracks]) => {
        const trackTotal = albumTracks.find((t) => !!t.trackTotal);
        const albumartist = albumTracks.find((t) => !!t.albumartist);
        const year = albumTracks.find((t) => !!t.year);
        const cover = albumTracks.find((t) => !!t.cover);

        return {
          name: album,
          trackTotal: trackTotal?.trackTotal ?? albumTracks.length,
          albumartist: albumartist?.albumartist,
          year: year?.year,
          cover: cover?.cover,
          _id: albumTracks[0]._id,
        };
      })
      .sort((a, b) => (b.year || 0) - (a.year || 0));
  }, [albumDictionary]);

  /**
   * Contains album information, every value is used from the first track in the array that has the data.
   * TrackTotal has a fallback on the tracks array length
   */
  const albumInfo = useMemo<Album>(() => {
    const name = tracks.find((t) => !!t.album);
    const trackTotal = tracks.find((t) => !!t.trackTotal);
    const albumartist = tracks.find((t) => !!t.albumartist);
    const year = tracks.find((t) => !!t.year);
    const cover = tracks.find((t) => !!t.cover);

    return {
      name: name?.album,
      trackTotal: trackTotal?.trackTotal ?? tracks.length,
      albumartist: albumartist?.albumartist,
      year: year?.year,
      cover: cover?.cover,
    };
  }, [tracks]);

  return {
    albumInfo,
    albums,
  };
};

export default useAlbums;
