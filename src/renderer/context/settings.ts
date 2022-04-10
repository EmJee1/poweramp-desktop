import { createContext, Dispatch, SetStateAction } from 'react';
import { Settings } from '../../shared/types';

export interface ISettingsContext {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}

// @ts-expect-error default settings context value is set in the provider
const SettingsContext = createContext<ISettingsContext>();

export default SettingsContext;
