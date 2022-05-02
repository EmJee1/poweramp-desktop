import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from '../../../shared/types';
import useArtists from '../../hooks/use-artists';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';
import ArtistUnknown from './ArtistUnknown';

const Artist = () => {
  const params = useParams();
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const { albums } = useArtists(tracks);

  useEffect(() => {
    const { artist } = params;

    if (!artist) {
      return;
    }

    const getAlbums = async () => {
      setTracks(await window.electronAPI.getTracksByArtist(artist));
    };

    getAlbums();
  }, [params]);

  if (!tracks.length) {
    return <ArtistUnknown />;
  }

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      <ShowcaseGrid title="Albums">
        {albums.map((album) => (
          <ShowcaseGridItem
            key={album._id}
            title={album.name ?? 'Unknown'}
            subtitle={album.year?.toString() ?? undefined}
            img={album.cover ?? ''}
            to={`/artist/${album.albumartist}/album/${album.name}`}
          />
        ))}
      </ShowcaseGrid>
    </div>
  );
};

export default Artist;
