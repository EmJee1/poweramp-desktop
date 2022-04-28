import { createContext, Dispatch, SetStateAction } from 'react';
import { SettingsItem } from '../../shared/types';

export interface ISettingsContext {
  settings: SettingsItem;
  setSettings: Dispatch<SetStateAction<SettingsItem>>;
}

// @ts-expect-error default settings context value is set in the provider
const SettingsContext = createContext<ISettingsContext>();

export default SettingsContext;
