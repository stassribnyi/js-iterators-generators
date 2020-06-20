import fetch from 'node-fetch';

const ITEMS_PER_PAGE = 20;

const fetchUsers = (page) =>
  fetch(`https://randomuser.me/api/?page=${page}&results=${ITEMS_PER_PAGE}`)
    .then((response) => response.json())
    .then(({ results }) => results)
    .then((users) =>
      users.map((user) => ({
        gender: user.gender,
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        city: user.location.city,
        email: user.email,
        phone: user.phone,
        picture: user.picture.thumbnail,
      }))
    );

export const USERS = {
  [Symbol.asyncIterator]: async function* () {
    let page = 0;

    while (true) {
      for (const user of await fetchUsers(page)) {
        yield user;
      }

      page++;
    }
  },
};
