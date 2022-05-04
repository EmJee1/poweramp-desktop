import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from '../../../shared/types';
import useArtists from '../../hooks/use-artists';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';
import ArtistUnknown from './ArtistUnknown';
import Modal from '../../components/Modal';

const Artist = () => {
  const params = useParams();
  const [tracks, setTracks] = useState<TrackItem[]>([]);
  const [editArtist, setEditArtist] = useState(false);
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

  const selectImage = async () => {
    const image = await window.electronAPI.openImage();
    console.log(image);
  };

  if (!tracks.length) {
    return <ArtistUnknown />;
  }

  return (
    <div>
      <h1>Artist {params.artist}</h1>
      <button type="button" onClick={() => setEditArtist(true)}>
        Edit
      </button>
      {editArtist && (
        <Modal>
          <form>
            <label htmlFor="artist-name">Name</label>
            <input
              type="text"
              id="artist-name"
              value={params.artist}
              disabled
            />
            <label htmlFor="artist-image">Artist image</label>
            <button type="button" onClick={selectImage}>
              Select file
            </button>
          </form>
        </Modal>
      )}
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
