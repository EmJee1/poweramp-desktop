import { TrackItem } from '../../shared/types';

const useArtists = () => {
  const getAlbumsByTracks = (tracksToSearch: TrackItem[]) => {
    const albumsDictionary: Record<string, TrackItem[]> = {};

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
    tracksToSearch: TrackItem[],
    album: string,
    albumartist: string
  ) => {
    return tracksToSearch.filter(
      (track) => track.album === album && track.albumartist === albumartist
    );
  };

  return {
    getAlbumsByTracks,
    getAlbumTracks,
  };
};

export default useArtists;
