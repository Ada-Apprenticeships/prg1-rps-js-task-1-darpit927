function rockPaperScissors(player1, player2) {
  const moves = ["rock", "paper", "scissors", "lizard", "spock"];
  const movesPlayer1 = player1.toLowerCase();
  const movesPlayer2 = player2.toLowerCase();

  // Validate moves
  if (!moves.includes(movesPlayer1) || !moves.includes(movesPlayer2)) {
    return "Invalid move. Please choose rock, paper, scissors, lizard, or spock.";
  }

  // If both players choose the same, it's a draw
  if (movesPlayer1 === movesPlayer2) return "draw";

  // Object defining what each move beats
  const winningOutcomes = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };

  // Determine the winner
  return winningOutcomes[movesPlayer1].includes(movesPlayer2) ? "player1" : "player2";
}
// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}