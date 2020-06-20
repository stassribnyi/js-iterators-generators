/**
 * UserProvider which has custom store for users and knows how to iterate them
 * using plain iterator boilerplate
 */
export class UsersProvider {
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
