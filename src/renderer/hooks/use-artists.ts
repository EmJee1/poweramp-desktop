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

  return {
    getAlbumsByTracks,
  };
};

export default useArtists;
