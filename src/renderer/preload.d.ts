import { ArtistItem, Settings, SettingsItem, TrackItem } from '../shared/types';

declare global {
  interface Window {
    electronAPI: {
      openFolder: () => Promise<null | string>;
      openImage: () => Promise<null | string>;
      updateSettings: (settings: Partial<Settings>) => Promise<void>;
      getSettings: () => Promise<SettingsItem>;
      scanTracks: () => Promise<void>;
      getArtist: (artist: string) => Promise<ArtistItem | null>;
      updateArtistImage: (artist: string, imagePath: string) => Promise<void>;
      getFeaturedArtists: () => Promise<ArtistItem[]>;
      getTracksByArtist: (artist: string) => Promise<TrackItem[]>;
      getTracksByAlbum: (
        albumartist: string,
        album: string
      ) => Promise<TrackItem[]>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      on(channel: string, func: (...args: any[]) => void): void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      once(channel: string, func: (...args: any[]) => void): void;
    };
  }
}

export {};
