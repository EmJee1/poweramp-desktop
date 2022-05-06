import { useParams } from 'react-router-dom';
import useAlbums from '../../hooks/use-albums';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';
import PageLoader from '../../components/PageLoader';
import ArtistUnknown from './ArtistUnknown';
import useArtist from '../../hooks/use-artist';
import EditArtist from './EditArtist';

const Artist = () => {
  const params = useParams();
  const { tracks, exists, loading, artist, refetchArtists } = useArtist(
    params.artist
  );
  const { albums } = useAlbums(tracks);

  if (loading) {
    return <PageLoader />;
  }

  if (!exists) {
    return <ArtistUnknown />;
  }

  return (
    <div>
      <div className="flex items-end gap-4">
        <img src={artist.image} alt="" className="h-48 w-48" />
        <div>
          <h2 className="text-4xl font-bold">{artist.name}</h2>
          <div className="flex gap-2">
            <p>{artist.tracksAmount} songs</p>
            <p className="flex scale-50 items-center text-xs">●</p>
            <EditArtist artist={artist} onChanged={refetchArtists} />
          </div>
        </div>
      </div>
      <ShowcaseGrid title="Albums">
        {albums.map((album) => (
          <ShowcaseGridItem
            key={album._id}
            title={album.name ?? 'Unknown'}
            subtitle={album.year?.toString()}
            img={album.cover ?? ''}
            to={`/artist/${album.albumartist}/album/${album.name}`}
          />
        ))}
      </ShowcaseGrid>
    </div>
  );
};

export default Artist;
