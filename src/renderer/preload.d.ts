import { Settings, Track } from '../shared/types';

declare global {
  interface Window {
    electronAPI: {
      openFolder: () => Promise<null | string>;
      updateSettings: (settings: Partial<Settings>) => Promise<void>;
      getSettings: () => Promise<Settings>;
      scanTracks: () => Promise<void>;
      getTracks: () => Promise<Track[]>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      on(channel: string, func: (...args: any[]) => void): void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      once(channel: string, func: (...args: any[]) => void): void;
    };
  }
}

export {};
