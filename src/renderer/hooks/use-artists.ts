import { useContext, useMemo } from 'react';
import TracksContext from '../context/tracks';

const useArtists = () => {
  const { tracks } = useContext(TracksContext);

  const artists = useMemo(() => {
    const allArtists = tracks
      .flatMap((track) => track.artists)
      .filter((a) => a && a.length) as string[];
    return Array.from(new Set(allArtists));
  }, [tracks]);

  return {
    artists,
  };
};

export default useArtists;
