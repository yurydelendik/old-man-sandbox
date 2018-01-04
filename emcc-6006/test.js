var Test = function(Test) {
    Test = Test || {};
  
    Test.test = function () { return "hi"; };
    return Test;
  };
  if (typeof define === "function" && define['amd']) {
    define(function() { return Test; });
  }
  if (typeof require === "function" && typeof module === "object" && module && module['exports']) {
    module['exports'] = Test;
  };
  