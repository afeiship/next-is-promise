/*!
 * name: @feizheng/next-is-promise
 * description: Test whether an object looks like a promises-a+ promise.
 * homepage: https://github.com/afeiship/next-is-promise
 * version: 1.0.0
 * date: 2020-05-06T00:25:49.825Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var OBJ = 'object';
  var FUNC = 'function';

  nx.isPromise = function (inObj) {
    return !!inObj && (typeof inObj === OBJ || typeof inObj === FUNC) && typeof obj.then === FUNC;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPromise;
  }
})();

//# sourceMappingURL=next-is-promise.js.map
