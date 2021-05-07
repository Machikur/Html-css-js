const gameSummary = {
 gameNumbers: 0,
 playerWins: 0,
 bootWins: 0,
 draws: 0
}

const game = {
 playerChoise: "",
 bootChoice: "",
 playerChoiceHTML: ""
}

const hands = [...document.querySelectorAll('.select img')];

hands.forEach(element => {

 element.addEventListener('click', function () {
  game.playerChoise = element.dataset.option;

  hands.forEach(element => element.style.boxShadow = "");
  element.style.boxShadow = "0 0 0 4px yellow"
 })
})

const startButton = document.querySelector('button');
startButton.addEventListener('click', startGame);

function startGame() {
 if (!game.playerChoise) {
  return alert("wybierz dłoń");
 }
 bootMove();
 const result = checkResult(game.playerChoise, game.bootChoice);
 publishResult(game.playerChoise, game.bootChoice, result);
}

function bootMove() {
 game.bootChoice = hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(playerChoise, bootChoice) {
 if (playerChoise === bootChoice) {
  return "remis";
 } else if (playerChoise === "papier" && bootChoice === "kamień" || playerChoise === "kamień" && bootChoice === "nożyczki" ||
  playerChoise === "nożyczki" && bootChoice === "papier") {
  return "player"
 } else {
  return "boot";
 }
}

function publishResult(player, boot, result) {
 document.querySelector('[data-summary="your-choice"]').textContent = player;

 document.querySelector('[data-summary="ai-choice"]').textContent = boot;

 document.querySelector('p.numbers span').textContent = ++gameSummary.gameNumbers;

 if (result === "player") {
  document.querySelector('p.wins span').textContent = ++gameSummary.playerWins;
  document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś";
  document.querySelector('[data-summary="who-win"]').style.color = "green";
 } else if (result === "boot") {
  document.querySelector('p.losses span').textContent = ++gameSummary.bootWins;
  document.querySelector('[data-summary="who-win"]').textContent = "Komputer zwyciężył";
  document.querySelector('[data-summary="who-win"]').style.color = "red";
 } else {
  document.querySelector('p.draws span').textContent = ++gameSummary.draws;
  document.querySelector('[data-summary="who-win"]').textContent = "Remis";
  document.querySelector('[data-summary="who-win"]').style.color = "grey";
 }
}