import db from './fake.db.js';

export const createStore = () => ({
  get: (tableName, recordId) => db[tableName][recordId],
});
