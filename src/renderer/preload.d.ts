import { Settings } from '../shared/types';

declare global {
  interface Window {
    electronAPI: {
      openFolder: () => Promise<null | string>;
      updateSettings: (settings: Partial<Settings>) => Promise<void>;
      getSettings: () => Promise<Settings>;
      scanLibrary: () => Promise<string[]>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      on(channel: string, func: (...args: any[]) => void): void;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      once(channel: string, func: (...args: any[]) => void): void;
    };
  }
}

export {};
