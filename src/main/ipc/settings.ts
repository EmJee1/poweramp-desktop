import { IpcMainInvokeEvent } from 'electron';
import { Settings } from '../../shared/types';
import db from '../../db/connection';

export const getSettings = async () => db.settings.findOne<Settings>({});

export const handleSettingsUpdate = async (
  _event: IpcMainInvokeEvent,
  settings: Partial<Settings>
) => {
  return db.settings.update<Settings>({}, settings);
};

export const handleSettingsGet = async () => {
  return getSettings();
};
