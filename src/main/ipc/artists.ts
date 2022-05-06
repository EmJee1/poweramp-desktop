import { IpcMainInvokeEvent } from 'electron';
import { convertImagePathToBase64DataUri } from '../util/images';
import { updateArtist } from '../util/artists';
import { Artist } from '../../shared/types';
import db from '../../db/connection';

export const handleArtistGet = async (
  _event: IpcMainInvokeEvent,
  artist: string
) => {
  console.log(artist);
  return db.artists.findOne<Artist>({ name: artist });
};

export const handleArtistUpdateImage = async (
  _event: IpcMainInvokeEvent,
  artist: string,
  imagePath: string
) => {
  const image = await convertImagePathToBase64DataUri(imagePath);
  await updateArtist(artist, { image });
  return image;
};
