import { getCache } from '../util/cache';

export const handleFeaturedArtistsGet = async () => {
  const cache = await getCache();
  return cache.artists.slice(0, 6);
};
