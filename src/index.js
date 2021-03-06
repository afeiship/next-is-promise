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
