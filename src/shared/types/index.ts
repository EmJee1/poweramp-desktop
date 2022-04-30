export type WithId<T> = { _id: string } & T;

export interface Settings {
  audioDirectories: string[];
}

export interface Track {
  /**
   * Absolute path to the file
   */
  path: string;

  /**
   * Title of the track
   */
  title?: string;

  /**
   * Main artist of the album
   */
  albumartist?: string;

  /**
   * All artists
   */
  artists?: string[];

  /**
   * Genres
   */
  genre?: string[];

  /**
   * Cover image in base64 format
   */
  cover?: string;

  /**
   * Album name
   */
  album?: string;

  /**
   * Year the track was released
   */
  year?: number;

  /**
   * Total amount of tracks in the album
   */
  trackTotal?: number;

  /**
   * Order number of track in the album
   */
  trackNumber?: number;
}

export interface Artist {
  name: string;
  image?: string;
  tracksAmount: number;
}

export type SettingsItem = WithId<Settings>;
export type TrackItem = WithId<Track>;
export type ArtistItem = WithId<Artist>;
