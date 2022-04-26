import { useContext, useMemo } from 'react';
import TracksContext from '../context/tracks';
import { Track } from '../../shared/types';

const useArtists = () => {
  const { tracks } = useContext(TracksContext);

  const artists = useMemo(() => {
    const allArtists = tracks
      .flatMap((track) => track.artists)
      .filter((a) => a && a.length) as string[];
    return Array.from(new Set(allArtists));
  }, [tracks]);

  const getTracksByArtist = (artist: string) => {
    return tracks.filter((track) => track.artists?.includes(artist));
  };

  const getAlbumsByTracks = (tracksToSearch: Track[]) => {
    const albumsDictionary: Record<string, Track[]> = {};

    tracksToSearch.forEach((track) => {
      if (!track.album) return;

      if (!albumsDictionary[track.album]) {
        albumsDictionary[track.album] = [];
      }

      albumsDictionary[track.album].push(track);
    });

    return albumsDictionary;
  };

  const getAlbumTracks = (
    tracksToSearch: Track[],
    album: string,
    albumartist: string
  ) => {
    return tracksToSearch.filter(
      (track) => track.album === album && track.albumartist === albumartist
    );
  };

  return {
    getAlbumsByTracks,
    getTracksByArtist,
    getAlbumTracks,
    artists,
  };
};

export default useArtists;
