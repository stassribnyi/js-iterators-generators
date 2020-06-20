import db from './fake.db.js';

import { delay } from '../promise.utils.js';

export const createStore = () => ({
  get: (tableName, recordId) => delay(500).then(() => db[tableName][recordId]),
});
