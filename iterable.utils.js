import { delay } from './promise.utils.js';

export const map = (mapper) =>
  async function* (iterable) {
    for await (const item of iterable) {
      yield mapper(item);
    }
  };

export const pipe = (...callbacks) => (iterable) =>
  callbacks.reduce((result, callback) => callback(result), iterable);

export const delayed = (delaySeconds) =>
  async function* (iterable) {
    for await (const item of iterable) {
      yield delay(delaySeconds * 1000).then(() => item);
    }
  };
