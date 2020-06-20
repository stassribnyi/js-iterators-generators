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

const users = new UsersProvider(['Bran', 'John', 'Stan', 'Kate']);

for (const user of users) {
  console.log(user);
}
