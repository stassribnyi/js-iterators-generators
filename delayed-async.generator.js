import { delay } from './promise.utils.js';

export async function* delayed(delaySeconds, iterable) {
  for await (const item of iterable) {
    yield delay(delaySeconds * 1000).then(() => item);
  }
}
