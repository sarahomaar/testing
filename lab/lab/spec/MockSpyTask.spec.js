var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
 return counter.currentValues();
}

describe("mock and spy", function () {
 
  // and expect that we called the spy function for one time
  it("spying", function () {
   spyOn(counter,"currentValues");
   sumOfValues();
   sumOfValues();
   sumOfValues();
   expect(counter.currentValues).toHaveBeenCalledTimes(3);

  });

});
