export const map = (mapper) =>
  async function* (iterable) {
    for await (const item of iterable) {
      yield mapper(item);
    }
  };

export const pipe = (...callbacks) => (iterable) =>
  callbacks.reduce((result, callback) => callback(result), iterable);
