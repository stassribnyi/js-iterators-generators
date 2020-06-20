import { createStoreSync } from '../stores/index.js';

const store = createStoreSync();

export const USERS = {
  [Symbol.iterator]: () => {
    let userId = 0;

    return {
      next: () => {
        const user = store.get('user', userId);

        if (!user) {
          return { done: true };
        }

        const value = { ...user, foods: store.get('food', userId) };

        userId++;

        return { value, done: false };
      },
    };
  },
};
