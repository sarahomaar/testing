var index=require('../index')
describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  // at before all assign pos vals with array of positive numbers,

  // and assign negative vals with negative array of numbers,

  // assign vals to pos_vals.concat(neg_vals);

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));
  beforeAll(()=>{
    pos_vals=[1,2,3,4,10];
    neg_vals=[-2,-5,-4];
    vals=pos_vals.concat(neg_vals);
    sum_of_vals=vals.reduce((x,y)=>x+y,0);
  })
  // at before each console.log all vals
 beforeEach(()=>{
  console.log("pos_vals",pos_vals);
  console.log("neg_vals",neg_vals);
  console.log("All_vals",vals);
  console.log("sum_of_vals",sum_of_vals);



 })
  // at after each console.log done
afterEach(()=>{
  console.log("done");
})
  // at after all set all variables to 0

  it("sum function should equal to sum of the values", () => {
expect(index.sum(pos_vals)).toEqual(20);
  });

  it("positive function should equal to positive values", () => {
    expect(index.positive(vals)).toEqual(pos_vals);


  });
});





