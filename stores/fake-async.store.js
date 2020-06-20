import db from './fake.db.js';

import { delay } from '../promise.utils.js';

export const createStore = () => ({
  get: (tableName, recordId) => delay(1000).then(() => db[tableName][recordId]),
});
