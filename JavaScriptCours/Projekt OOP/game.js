class Game {
 constructor(startQuote) {
  this.wallet = new Wallet(startQuote);
  this.statistics = new Statistics();
  document.getElementById('start').addEventListener('click', this.startGame.bind(this));
  this.spanWallet = document.querySelector('.panel span.wallet');
  this.boards = document.querySelectorAll('div.color');
  this.inputBid = document.getElementById('bid');
  this.spanResult = document.querySelector('.score span.result');
  this.spanGames = document.querySelector('.score span.number');
  this.spanWins = document.querySelector('.score span.win');
  this.spanLosses = document.querySelector('.score span.loss');

  this.render();

 }
 render(money = this.wallet.getWalletValue(), stats = [0, 0, 0], result = "",
  colors = ['grey', 'grey', 'grey'], wonMoney) {
  this.spanWallet.textContent = money;
  this.spanGames.textContent = stats[0];
  this.spanWins.textContent = stats[1];
  this.spanLosses.textContent = stats[2];
  this.spanResult.textContent = result !== "" ? (result ? "wygrałes " + wonMoney + "$, " : "Przegrałeś, ") : result;
  this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);

 }

 startGame() {
  if (this.inputBid.value <= 1) return alert("kwota musi być większa niż 1");

  const bid = Math.floor(this.inputBid.value);
  if (!this.wallet.checkCanPlay(bid)) return alert("Nie masz wystarczająco środków");

  this.wallet.changeBalance(bid, "-");

  this.draw = new Draw();
  const colors = this.draw.getDrowResult();
  const win = Result.checkWinner(colors);
  const wonMoney = Result.moneyWonInGame(win, bid);
  const balance = this.wallet.changeBalance(wonMoney);
  this.statistics.addGameStatistics(win, bid);

  this.render(balance, this)

  this.render(balance, this.statistics.showGameStatistics(), win,
   colors, wonMoney);

 }
}

const game = new Game(100);