import { getFeaturedArtists } from '../util/artists';

export const handleFeaturedArtistsGet = async () => {
  return getFeaturedArtists();
};
