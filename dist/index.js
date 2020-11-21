/*!
 * name: @jswork/next-is-promise
 * description: Test whether an object looks like a promises-a+ promise.
 * homepage: https://github.com/afeiship/next-is-promise
 * version: 1.0.0
 * date: 2020-11-21 10:53:49
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var OBJ = 'object';
  var FUNC = 'function';

  nx.isPromise = function (inObj) {
    return !!inObj && (typeof inObj === OBJ || typeof inObj === FUNC) && typeof inObj.then === FUNC;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPromise;
  }
})();
