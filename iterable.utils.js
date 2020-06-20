export async function* map(iterable, mapper) {
  for await (const item of iterable) {
    yield mapper(item);
  }
}
