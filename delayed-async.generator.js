import { delay } from './promise.utils.js';

export const delayed = (delaySeconds, iterable) => ({
  [Symbol.asyncIterator]: () => ({
    next: () => {
      const iterator = iterable[Symbol.asyncIterator]();
      const delayedIterator = delay(delaySeconds * 1000).then(
        iterator.next.bind(iterator)
      );

      return delayedIterator;
    },
  }),
});
