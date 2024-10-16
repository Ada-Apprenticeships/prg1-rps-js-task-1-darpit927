// The function returns the winner of Rock, Paper, Scissors game between 2 players 
function rockPaperScissors(player1, player2) {
  //Creates a constant that includes arrays showing what wins against what
  const winningPrecedence = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };
// Creates conditions that returns the winner 
  if (player1 === player2) {
    return "draw";
  } else if (winningPrecedence[player1].includes(player2)) {
    return "player1";
  } else {
    return "player2";
  }
}











// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}