import fetch from 'node-fetch';

const ITEMS_PER_PAGE = 20;

const fetchUsers = (page) =>
  fetch(`https://randomuser.me/api/?page=${page}&results=${ITEMS_PER_PAGE}`)
    .then((response) => response.json())
    .then(({ results }) => results);

export async function* generateUsers() {
  let page = 0;

  while (true) {
    for (const user of await fetchUsers(page)) {
      yield user;
    }

    page++;
  }
}
