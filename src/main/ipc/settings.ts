import { IpcMainEvent } from 'electron';
import db from '../../db/connection';

export const onSettingsUpdate = (_: IpcMainEvent) => {
  const settings = db.settings.find({});
  console.log(settings);
};
