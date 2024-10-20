function rockPaperScissors(player1, player2) {
  // If both players choose the same, it's a draw
  if (player1 === player2) return "draw";
  // Object defining what each move beats
  const winningOutcomes = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };
  // Check if player1's move beats player2's move, otherwise player2 wins
  return winningOutcomes[player1].includes(player2) ? "player1" : "player2";
}
// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}