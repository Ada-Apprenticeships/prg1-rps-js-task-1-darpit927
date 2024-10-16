function rockPaperScissors(player1, player2) {
  if (player1===player2){
    return "draw"
  }else if ((player1==="rock"&&(player2==="scissors"||player2==="lizard"))
    ||(player1==="paper"&&(player2==="rock"||player2==="spock"))
    ||(player1==="scissors"&&(player2==="paper"||player2==="lizard"))
    ||(player1==="lizard"&&(player2==="spock"||player2==="paper"))
    ||(player1==="spock"&&(player2==="rock"||player2==="scissors"))) {  
      return "player1"
    }else {return "player2"}
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}