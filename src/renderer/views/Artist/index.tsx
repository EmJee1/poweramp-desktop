import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useArtists from '../../hooks/use-artists';

const Artist = () => {
  const { artists, getTracksByArtist } = useArtists();
  const params = useParams();

  const artistTracks = useMemo(() => {
    if (!params.artist || !artists.includes(params.artist)) {
      return [];
    }

    return getTracksByArtist(params.artist);
  }, [artists, params, getTracksByArtist]);

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      {artistTracks.map((track) => (
        <p key={track.path}>
          {track.artists?.join(', ')}: {track.title}
        </p>
      ))}
    </div>
  );
};

export default Artist;
