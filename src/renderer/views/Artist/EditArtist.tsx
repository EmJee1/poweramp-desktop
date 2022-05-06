import { useState } from 'react';
import Modal from '../../components/Modal';
import { ArtistItem } from '../../../shared/types';
import FormField from '../../components/FormField';
import FormInput from '../../components/FormInput';
import SelectArtistImage from './SelectArtistImage';

interface EditArtistProps {
  artist: ArtistItem;
}

const EditArtist = ({ artist }: EditArtistProps) => {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
      {editing && (
        <Modal title="Edit artist" onClose={() => setEditing(false)}>
          <form>
            <FormField label="Name" htmlFor="name">
              <FormInput id="name" value={artist.name} disabled />
            </FormField>
            <FormField label="Image">
              <SelectArtistImage artist={artist} />
            </FormField>
          </form>
        </Modal>
      )}
    </>
  );
};

export default EditArtist;
