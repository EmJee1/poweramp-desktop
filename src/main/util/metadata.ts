import mm from 'music-metadata';
import { Track } from '../../shared/types';

export const extractMetadata = async (
  filePath: string
): Promise<Pick<Track, 'title' | 'albumartist' | 'artists' | 'genre'>> => {
  const { common } = await mm.parseFile(filePath);

  return {
    title: common.title,
    albumartist: common.albumartist,
    artists: common.artists,
    genre: common.genre,
  };
};
