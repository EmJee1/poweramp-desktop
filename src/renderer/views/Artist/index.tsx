import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from '../../../shared/types';
import useArtists from '../../hooks/use-artists';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';
import ArtistUnknown from './ArtistUnknown';

const Artist = () => {
  const params = useParams();
  const { getAlbumsByTracks } = useArtists();
  const [artistUnknown, setArtistUnknown] = useState(false);
  const [albums, setAlbums] = useState<Record<string, TrackItem[]>>({});

  useEffect(() => {
    const { artist } = params;

    if (!artist) {
      setArtistUnknown(true);
      return;
    }

    const getAlbums = async () => {
      const tracks = await window.electronAPI.getTracksByArtist(artist);

      if (!tracks.length) {
        setArtistUnknown(true);
        return;
      }

      setAlbums(getAlbumsByTracks(tracks));
    };

    getAlbums();
  }, [params]);

  if (artistUnknown) {
    return <ArtistUnknown />;
  }

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      <ShowcaseGrid title="Albums">
        {Object.entries(albums).map(([album, tracks]) => (
          <ShowcaseGridItem
            key={album}
            title={album}
            img={tracks[0].cover ?? ''}
            to={`/artist/${tracks[0].albumartist}/album/${tracks[0].album}`}
          />
        ))}
      </ShowcaseGrid>
    </div>
  );
};

export default Artist;
