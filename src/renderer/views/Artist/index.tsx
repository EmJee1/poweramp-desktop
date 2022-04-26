import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Track as ITrack } from '../../../shared/types';
import useArtists from '../../hooks/use-artists';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';

const Artist = () => {
  const { artists, getTracksByArtist, getAlbumsByTracks } = useArtists();
  const params = useParams();
  const [albums, setAlbums] = useState<Record<string, ITrack[]>>({});

  useEffect(() => {
    const { artist } = params;

    if (!artist || !artists.includes(artist)) {
      return;
    }

    const artistTracks = getTracksByArtist(artist);
    const albumDictionary = getAlbumsByTracks(artistTracks);
    setAlbums(albumDictionary);
  }, [artists, params]);

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      <ShowcaseGrid title="Albums">
        {Object.entries(albums).map(([album, tracks]) => (
          <ShowcaseGridItem
            key={album}
            title={album}
            img={tracks[0].cover ?? ''}
          />
        ))}
      </ShowcaseGrid>
    </div>
  );
};

export default Artist;
