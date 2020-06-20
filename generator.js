/**
 * NewsProvider which has custom store for news and knows how to iterate them
 * using generator function to reduce amount of boilerplate required for iterator
 */
export class NewsProvider {
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
