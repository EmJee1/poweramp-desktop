export type WithId<T> = { _id: string } & T;

export interface Settings {
  audioDirectories: string[];
}

export interface Track {
  path: string;
  title?: string;
  albumartist?: string;
  artists?: string[];
  genre?: string[];
  cover?: string;
  album?: string;
}

export interface Cache {
  artists: string[];
}

export type SettingsItem = WithId<Settings>;
export type TrackItem = WithId<Track>;
export type CacheItem = WithId<Cache>;
