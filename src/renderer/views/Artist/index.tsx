import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAlbums from '../../hooks/use-albums';
import ShowcaseGrid from '../../components/ShowcaseGrid';
import ShowcaseGridItem from '../../components/ShowcaseGridItem';
import ArtistUnknown from './ArtistUnknown';
import Modal from '../../components/Modal';
import useArtist from '../../hooks/use-artist';

const Artist = () => {
  const params = useParams();
  const [editArtist, setEditArtist] = useState(false);
  const { tracks, exists, artist } = useArtist(params.artist);
  const { albums } = useAlbums(tracks);

  const selectImage = async () => {
    if (!params.artist) {
      return;
    }

    const imagePath = await window.electronAPI.openImage();

    if (!imagePath) {
      return;
    }

    await window.electronAPI.updateArtistImage(params.artist, imagePath);
  };

  if (!exists) {
    return <ArtistUnknown />;
  }

  return (
    <div>
      <h1>Artist {artist.name}</h1>
      <button type="button" onClick={() => setEditArtist(true)}>
        Edit
      </button>
      {editArtist && (
        <Modal onClose={() => setEditArtist(false)}>
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
