import { IpcMainInvokeEvent } from 'electron';
import { convertImagePathToBase64DataUri } from '../util/images';
import { updateArtist } from '../util/artists';

export const handleArtistUpdateImage = async (
  _event: IpcMainInvokeEvent,
  artist: string,
  imagePath: string
) => {
  const image = await convertImagePathToBase64DataUri(imagePath);
  await updateArtist(artist, { image });
  return image;
};
