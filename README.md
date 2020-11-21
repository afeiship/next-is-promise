# next-is-promise
> Test whether an object looks like a promises-a+ promise.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-is-promise
```

## usage
```js
import '@jswork/next-is-promise';

const fn1 = () => {
  return new Promise(() => {
    setTimeout(() => {
      resolve('done');
    }, 1000);
  });
};

nx.isPromise(fn1());    // true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-is-promise/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-is-promise
[version-url]: https://npmjs.org/package/@jswork/next-is-promise

[license-image]: https://img.shields.io/npm/l/@jswork/next-is-promise
[license-url]: https://github.com/afeiship/next-is-promise/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-is-promise
[size-url]: https://github.com/afeiship/next-is-promise/blob/master/dist/next-is-promise.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-is-promise
[download-url]: https://www.npmjs.com/package/@jswork/next-is-promise
