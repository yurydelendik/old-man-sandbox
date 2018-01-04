var Test = function(Test) {
    Test = Test || {};
  
    Test.test = function () { return "hi" };
    return Test;
  };
  if (typeof module === "object" && module.exports) {
    module['exports'] = Test;
  };
  