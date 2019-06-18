/*!
 * name: next-is-promise
 * url: https://github.com/afeiship/next-is-promise
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var OBJ = 'object';
  var FUNC = 'function';

  nx.isPromise = function(inObj) {
    return (
      !!inObj &&
      (typeof inObj === OBJ || typeof inObj === FUNC) &&
      typeof obj.then === FUNC
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isPromise;
  }
})();
