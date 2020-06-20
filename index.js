import { UsersProvider } from './iterator.js';
import { NewsProvider } from './generator.js';

import { USERS_SYNC, USERS_ASYNC } from './users-iterators/index.js';

// Demo
const users = new UsersProvider(['Bran', 'John', 'Stan', 'Kate']);

console.log('Users:');
for (const user of users) {
  console.log(user);
}

const news = new NewsProvider(['Pandemic', 'Tsunami', 'Volcano']);

console.log('\nNews:');

for (const newsItem of news) {
  console.log(newsItem);
}

console.log('\nUsers Store Sync:');

for (const user of USERS_SYNC) {
  console.log(user);
}

console.log('\nUsers Store Async:');
(async () => {
  for await (const user of USERS_ASYNC) {
    console.log(user);
  }
})();
