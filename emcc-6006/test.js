var Test = function(Test) {
    Test = Test || {};
  
    Test.test = function () { return "hi"; };
    return Test;
  };

if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Test;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Test; });
else if (typeof exports === 'object')
  exports["Test"] = Test;
  