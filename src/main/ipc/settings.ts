import { IpcMainInvokeEvent } from 'electron';
import db from '../../db/connection';
import { Settings } from '../../types';

export const handleSettingsUpdate = async (
  _event: IpcMainInvokeEvent,
  settings: Partial<Settings>
) => {
  return db.settings.update<Settings>({}, settings);
};

export const handleSettingsGet = async () => {
  return db.settings.findOne<Settings>({});
};
