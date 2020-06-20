import { UsersProvider } from './iterator.js';
import { NewsProvider } from './generator.js';

import { USERS_SYNC, USERS_ASYNC } from './users-iterators/index.js';
import { generateUsers } from './users-async.generator.js';
import { map, pipe } from './iterable.utils.js';
import { delay } from './promise.utils.js';

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

(async () => {
  console.log('\nUsers Store Async:');
  for await (const user of USERS_ASYNC) {
    console.log(user);
  }

  console.log('\nUsers Store Async generator:');

  for await (const user of pipe(
    map(({ name }) => ({ name })),
    map((user) => delay(1000).then(() => user))
  )(generateUsers())) {
    console.log(user);
  }
})();
