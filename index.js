import { UsersProvider } from './iterator.js';
import { NewsProvider } from './generator.js';

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
