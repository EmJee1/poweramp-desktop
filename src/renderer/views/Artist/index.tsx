import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Track as ITrack } from '../../../shared/types';
import useArtists from '../../hooks/use-artists';
import Track from '../../components/Track';
import ShowcaseCarousel from '../../components/ShowcaseCarousel';
import ShowcaseCarouselItem from '../../components/ShowcaseCarouselItem';

const Artist = () => {
  const { artists, getTracksByArtist, getAlbumsByTracks } = useArtists();
  const params = useParams();
  const [albums, setAlbums] = useState<Record<string, ITrack[]>>({});

  useEffect(() => {
    const { artist } = params;

    if (!artist || !artists.includes(artist)) {
      return [];
    }

    const artistTracks = getTracksByArtist(artist);
    const albumDictionary = getAlbumsByTracks(artistTracks);
    setAlbums(albumDictionary);
  }, [artists, params]);

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      <ShowcaseCarousel title="Albums">
        {Object.entries(albums).map(([album, tracks]) => (
          <ShowcaseCarouselItem
            key={album}
            title={album}
            img={tracks[0].cover ?? ''}
          />
        ))}
      </ShowcaseCarousel>
    </div>
  );
};

export default Artist;
