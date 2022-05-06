import { PencilAltIcon } from '@heroicons/react/outline';
import { ArtistItem } from '../../../shared/types';

interface SelectArtistImageProps {
  artist: ArtistItem;
  onChanged?: () => void;
}

const SelectArtistImage = ({ onChanged, artist }: SelectArtistImageProps) => {
  const selectImage = async () => {
    const imagePath = await window.electronAPI.openImage();

    if (!imagePath) {
      return;
    }

    await window.electronAPI.updateArtistImage(artist.name, imagePath);

    onChanged?.();
  };

  if (!artist.image) {
    return (
      <button type="button" onClick={selectImage}>
        Select image
      </button>
    );
  }

  return (
    <div className="relative h-24 w-24">
      <img src={artist.image} alt="" className="h-full w-full" />
      <div className="group absolute inset-0">
        <button
          type="button"
          onClick={selectImage}
          className="hidden h-full w-full flex-col place-items-center items-center justify-center gap-1 bg-black/50 text-white group-hover:flex"
        >
          <PencilAltIcon className="h-6 w-6" />
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

SelectArtistImage.defaultProps = {
  onChanged: undefined,
};

export default SelectArtistImage;
