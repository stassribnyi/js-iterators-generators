/**
 * UserProvider which has custom store for users and knows how to iterate them
 * using plain iterator boilerplate
 */
class UsersProvider {
  currentUserIndex = 0;

  constructor(usersSource = []) {
    this.usersSource = Object.entries(usersSource).reduce(
      (users, [key, value]) => ({ ...users, [key]: value }),
      {}
    );
  }

  [Symbol.iterator] = () => ({
    next: () => {
      if (this.currentUserIndex >= Object.keys(this.usersSource).length) {
        return { done: true };
      }

      return {
        value: this.usersSource[this.currentUserIndex++],
        done: false,
      };
    },
  });
}

/**
 * NewsProvider which has custom store for news and knows how to iterate them
 * using generator function to reduce amount of boilerplate required for iterator
 */
class NewsProvider {
  currentNewsIndex = 0;

  constructor(newsSource = []) {
    this.newsSource = Object.entries(newsSource).reduce(
      (users, [key, value]) => ({ ...users, [key]: value }),
      {}
    );
  }

  [Symbol.iterator] = function* () {
    while (this.currentNewsIndex < Object.keys(this.newsSource).length) {
      yield this.newsSource[this.currentNewsIndex++];
    }
  };
}

// Demo
const users = new UsersProvider(['Bran', 'John', 'Stan', 'Kate']);
const news = new NewsProvider(['Pandemic', 'Tsunami', 'Volcano']);

console.log('Users:');
for (const user of users) {
  console.log(user);
}

console.log('\nNews:');

for (const newsItem of news) {
  console.log(newsItem);
}
