// function sum(x,y){
//   return x + y;
// }
//
//

// function sum(){
//   return "nobody wins"
// }

// function sum(){
//   if (sum === ['x','x','x','','','','','','']){
//       return "x wins";
//   }else if (sum == []){
//   return "nobody wins";
// }
//   };
//
// module.exports = sum;

function tictactoe(board){
  if (board.length<9){
    return "Invalid board";
  }
  if (board[0] == "x" && board[1] == "x" && board[2] == "x"){
    return "x wins";
  }
  return "Nobody wins";
}

module.exports = tictactoe;
