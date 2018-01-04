
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Test = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  return function(Test) {
    Test = Test || {};
  
    Test.test = function () { return "hi"; };
    return Test;
  };
});