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

export interface Artist {
  name: string;
  image?: string;
  tracksAmount: number;
}

export type SettingsItem = WithId<Settings>;
export type TrackItem = WithId<Track>;
export type ArtistItem = WithId<Artist>;
