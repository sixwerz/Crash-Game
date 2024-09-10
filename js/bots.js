let botBalance = 0;
let botWin = false;
let botX = 0;
// Тест ботов //

userGame.insertAdjacentHTML('afterend', testBot())

const activePlayers = document.querySelector('.active-players');
const anyStavkaMoneyInfo = document.querySelector('.any-stavka-money-info');
const anyUserGame = document.querySelector('.any-user-game');
const anyStavkaGameInfo = document.querySelector('.any-stavka-game-info');

function randomMoney() {
  let botBalanceRand = Math.random() * 9 + 1;
  botBalance = Math.round(botBalanceRand);
}

function randomX() {
  let botXRand = (Math.random() * 1) + 1;
  botX = Math.round(botXRand * 100) / 100;
}

randomX();

randomMoney();

anyStavkaMoneyInfo.textContent=botBalance;


function testBot() {
  return `
  <div class="any-user-game">
    <div class="any-user-profile">
        <img class="user-logo" src="../img/user.png" alt="userImg">
        <p>User</p>
    </div>

    <p class="any-stavka-money-info">0</p>

    <p class="any-stavka-game-info" data-gamex="">В игре</p>
  </div>
  `
}