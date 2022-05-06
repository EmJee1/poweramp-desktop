import { useState } from 'react';
import Modal from '../../components/Modal';
import { ArtistItem } from '../../../shared/types';

interface EditArtistProps {
  artist: ArtistItem;
}

const EditArtist = ({ artist }: EditArtistProps) => {
  const [editing, setEditing] = useState(false);

  const selectImage = async () => {
    const imagePath = await window.electronAPI.openImage();

    if (!imagePath) {
      return;
    }

    await window.electronAPI.updateArtistImage(artist.name, imagePath);
  };

  return (
    <>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
      {editing && (
        <Modal onClose={() => setEditing(false)}>
          <form>
            <label htmlFor="artist-name">Name</label>
            <input type="text" id="artist-name" value={artist.name} disabled />
            <label htmlFor="artist-image">Artist image</label>
            <button type="button" onClick={selectImage}>
              Select file
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default EditArtist;
