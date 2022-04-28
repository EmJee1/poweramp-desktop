import { getCache } from '../util/cache';

export const handleFeaturedArtistsGet = async () => {
  const cache = await getCache();

  console.log(cache?.artists);
};
