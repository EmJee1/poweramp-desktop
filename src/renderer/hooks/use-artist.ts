import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { ArtistItem, TrackItem } from '../../shared/types';

const useArtist = (artistName?: string) => {
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  // Artist typings set as always defined to avoid a lot of not-null checking
  // It is always defined if 'exists' is true, so the component should check for that boolean
  const [artist, setArtist] = useState() as [
    ArtistItem,
    Dispatch<SetStateAction<ArtistItem>>
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!artistName) {
      setLoading(false);
      setTracks([]);
      return;
    }

    const main = async () => {
      const getArtist = window.electronAPI.getArtist(artistName);
      const getTracks = window.electronAPI.getTracksByArtist(artistName);

      const [artistResult, tracksResult] = await Promise.all([
        getArtist,
        getTracks,
      ]);

      if (!artistResult) {
        setLoading(false);
        setTracks([]);
        return;
      }

      setArtist(artistResult);
      setTracks(tracksResult);
      setLoading(false);
    };

    main();
  }, [artistName]);

  const exists = useMemo(() => !!artist, [artist]);

  return {
    artist,
    tracks,
    exists,
    loading,
  };
};

export default useArtist;
