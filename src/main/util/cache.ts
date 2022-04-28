import { Cache, CacheItem } from '../../shared/types';
import db from '../../db/connection';

export const getCache = async (): Promise<CacheItem> => {
  const cache = await db.cache.findOne<CacheItem>({});

  if (!cache) {
    throw new Error('No registered cache found');
  }

  return cache;
};

export const updateCache = async (cache: Partial<Cache>) => {
  return db.cache.update<CacheItem>({}, cache);
};
