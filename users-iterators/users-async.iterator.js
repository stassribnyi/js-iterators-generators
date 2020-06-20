import { createStoreAsync } from '../stores/index.js';

const store = createStoreAsync();

export const USERS = {
  [Symbol.asyncIterator]: () => {
    let userId = 0;

    return {
      next: async () => {
        const user = await store.get('user', userId);

        if (!user) {
          return { done: true };
        }

        const value = { ...user, foods: await store.get('food', userId) };

        userId++;

        return { value, done: false };
      },
    };
  },
};
