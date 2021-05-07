class Result {

 static moneyWonInGame(result, bid) {
  if (result) return 3 * bid;
  else return 0;
 }

 static checkWinner(draw) {
  return ((draw[0] == draw[1] && draw[1] == draw[2]) ||
   (draw[0] != draw[1] && draw[1] != draw[2] && draw[0] != draw[2]));
 }
}
Result.moneyWonInGame(true, 12)