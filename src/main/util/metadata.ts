import mm from 'music-metadata';
import { Track } from '../../shared/types';
import { metadataArtistsSeparator } from '../../constants';

export const extractMetadata = async (
  filePath: string
): Promise<
  Pick<
    Track,
    | 'title'
    | 'albumartist'
    | 'artists'
    | 'genre'
    | 'cover'
    | 'album'
    | 'year'
    | 'trackTotal'
    | 'trackNumber'
  >
> => {
  const { common } = await mm.parseFile(filePath);

  let artists: string[] | undefined;

  if (common.artists?.length) {
    artists = common.artists
      .join(metadataArtistsSeparator)
      .split(metadataArtistsSeparator);
  }

  const cover = mm.selectCover(common.picture);
  let base64Cover;
  if (cover) {
    base64Cover = `data:${cover.format};base64,${cover.data.toString(
      'base64'
    )}`;
  }

  return {
    title: common.title,
    albumartist: common.albumartist,
    artists,
    genre: common.genre,
    cover: base64Cover,
    album: common.album,
    year: common.year,
    trackTotal: common.track.of ?? undefined,
    trackNumber: common.track.no ?? undefined,
  };
};
