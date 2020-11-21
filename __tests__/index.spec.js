const { resolve } = require('path');

(function () {
  require('../src');
  const fs = require('fs');

  describe('api.basic test', () => {
    test('nx.isPromise', function () {
      const fn1 = () => {
        return new Promise(() => {
          setTimeout(() => {
            resolve('done');
          }, 1000);
        });
      };
      expect(nx.isPromise(fn1())).toBe(true);
    });
  });
})();
