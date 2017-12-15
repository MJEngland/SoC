const sum = require("./sum");
//
// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1,2 )).toBe(3);
// });
//
// test("adds 1 + -2 to equal -1", () => {
//   expect(sum(1, -2 )).toBe(-1);
// });
//
// test("adds 0.1 + 0.2 to equal 0.3", () => {
//   expect(sum(0.1, 0.2 )).toBeCloseTo(0.3);
// });
//
// (['','','','','','','','','']
//

// test("There is nothing entered", () =>{
//   expect(sum(['','','','','','','','',''])).toBe("nobody wins");
// });
//
// test("There is nothing entered", () =>{
//   expect(sum(['x','x','x','','','','','',''])).toBe("x wins!");
// });
//
const tictactoe = require("./sum");

test("checks if no moves then no winner", () =>{
  expect(tictactoe(Array(9).fill(""))).toBe("Nobody wins");
});

test("check if length ", () =>{
  expect(tictactoe(Array(8).fill(""))).toBe("Invalid board");
});

// test("check if first row is a win for x ", () =>{
//   expect(tictactoe(Array(9).fill(""))).toBe("Invalid board");
// });
