import Datastore from 'nedb-promises';
import { app } from 'electron';
import path from 'path';

const productionDatabasePath = path.join(app.getPath('userData'), '/data');
const getDatabasePath = (name: string) =>
  process.env.NODE_ENV === 'production'
    ? path.join(productionDatabasePath, `/${name}.db`)
    : path.join(process.cwd(), `/src/db/.data/${name}.db`);

const db = {
  tracks: Datastore.create(getDatabasePath('tracks')),
  settings: Datastore.create(getDatabasePath('settings')),
  cache: Datastore.create(getDatabasePath('cache')),
};

export default db;
