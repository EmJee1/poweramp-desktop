import { IpcMainInvokeEvent } from 'electron';
import { Settings, SettingsItem } from '../../shared/types';
import db from '../../db/connection';

export const getSettings = async (): Promise<SettingsItem> => {
  const settings = await db.settings.findOne<SettingsItem>({});

  if (!settings) {
    throw new Error('No registered settings found');
  }

  return settings;
};

export const handleSettingsUpdate = async (
  _event: IpcMainInvokeEvent,
  settings: Partial<Settings>
) => {
  return db.settings.update<SettingsItem>({}, settings);
};

export const handleSettingsGet = async () => getSettings();
