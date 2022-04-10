import mm from 'music-metadata';
import { Track } from '../../shared/types';
import { metadataArtistsSeparator } from '../../constants';

export const extractMetadata = async (
  filePath: string
): Promise<Pick<Track, 'title' | 'albumartist' | 'artists' | 'genre'>> => {
  const { common } = await mm.parseFile(filePath);

  let artists: string[] | undefined;

  if (common.artists?.length) {
    artists = common.artists
      .join(metadataArtistsSeparator)
      .split(metadataArtistsSeparator);
  }

  return {
    title: common.title,
    albumartist: common.albumartist,
    artists,
    genre: common.genre,
  };
};
