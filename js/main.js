const time = document.querySelector('.time');
const crashBtn = document.querySelector('.crash');
const infoTime = document.querySelector('.info-time');
const crashMoney = document.querySelector('.crash-money');
const userGame = document.querySelector('.user-game');
const stavkaMoneyInfo = document.querySelector('.stavka-money-info');
const stavkaGameInfo = document.querySelector('.stavka-game-info');
const titleName = document.querySelector('title');

let timeValue = 5; 
let balance = 100;
let inGame = false; // Отвечает за вывод денег за икс (если в игре, то выведет)
let start = false; // Отвечает за отрисовку кнопок при начале игры
let withdraw = false // отвечает за то, чтобы тебе не выводило деньги за нажатие кнопки и после за иксы
let timer = setInterval(timeHandler, 1000);
let startInputValue = 0;
let startValue = 0;
let winMessage = false; // в истории проверяет на победу

// BALANCE //
const balanceButton = document.querySelector('.balance-button');
balanceButton.dataset.balance=balance;

// CRASH //
function crash() {
  
  let r = Math.random() * 9;
  let rand = Math.round(r);
  console.log(rand);

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  if(rand == 9) {
    let x = getRandom(1, 1.15);
    rand = Math.round(x * 100) / 100; 
  }

  if (rand==8) {
    let x = getRandom(1, 1.1);
    rand = Math.round(x * 100) / 100; 
  }

  if (rand==7) {
    let x = getRandom(1, 1.3);
    rand = Math.round(x * 100) / 100; 
  }

  if (rand==6) {
    let x = getRandom(1, 1.5);
    rand = Math.round(x * 100) / 100; 
  }
  
  if (rand==5) {
    let x = getRandom(1, 1.8);
    rand = Math.round(x * 100) / 100; 
  }
  
  if (rand==4) {
    rand = 'crash';
  }
  
  if (rand==3) {
    let x = getRandom(1, 2);
    rand = Math.round(x * 100) / 100;
  }
  
  if (rand==2) {
    let x = getRandom(1, 2.5);
    rand = Math.round(x * 100) / 100; 
  }
  
  if (rand==1) {
    let x = getRandom(1, 3);
    rand = Math.round(x * 100) / 100;
  }
  
  if(rand==0) {
    let x = getRandom(1, 5);
    rand = Math.round(x * 100) / 100;
  }
  
  // crashBtn.dataset.crashnum=rand;
  console.log(rand);

  // Повышение икса //

  let crashTimer = setInterval(() => {
    if(timeValue <= rand) {
      timeValue += 0.01;
      timeValue = Math.round(timeValue * 100) / 100;
      time.dataset.value=timeValue;

      // Победа в раунде //
      
      if(timeValue == startValue && withdraw == false && inGame == true && start == true) {
        let win = startInputValue * timeValue;
        balance = Math.round(balance * 100) / 100;
        balance += win;
        balanceButton.dataset.balance=balance;
        inGameStartBtn.style.display='none';
        noinGameStartBtn.style.display='inline';
        winMessage = true;

        stavkaGameInfo.textContent=startValue;
        stavkaGameInfo.dataset.gamex='x';
        stavkaGameInfo.style.color = '#8af29b';

      };
      
      // Bot //

     if(botX == timeValue) {
       anyStavkaGameInfo.textContent=botX;
       anyStavkaGameInfo.dataset.gamex='x';
       anyStavkaGameInfo.style.color = '#8af29b';
       botWin = true;
      };

    } else {
      start = false;
      time.style.color='#df2525';
      infoTime.textContent="Краш";
      inGameStartBtn.style.display='none';
      noinGameStartBtn.style.display='none';
      waitBtn.style.display='inline';

      if(winMessage==false){
        stavkaGameInfo.dataset.gamex='x';
        stavkaGameInfo.textContent=startValue;
        stavkaGameInfo.style.color = '#df2525';
      }

      // Bot //  

      if(botWin==false){
        anyStavkaGameInfo.dataset.gamex='x';
        anyStavkaGameInfo.textContent=botX;
        anyStavkaGameInfo.style.color = '#df2525';
      }

      clearInterval(crashTimer);

      setTimeout(() => {
        stavkaGameInfo.dataset.gamex='';
        time.style.color='#fff';
        crashMoney.dataset.money=0;
        waitBtn.style.display='none';
        startBtn.style.display='inline';
        infoTime.textContent="Игра начнется через";
        time.dataset.after="s";
        timeValue = 5;
        time.dataset.value=timeValue;

        userGame.style.display='none';

        stavkaGameInfo.style.color = '#4e5d8d';

        // Удаление ботов //
        anyUserGame.remove();

        return timer = setInterval(timeHandler, 1000);
      }, 3000);
    }
  }, 100);
}

// TIMER //

function timeHandler() {
  if(timeValue <= 0) {
    
    timeValue = 1;
    winMessage=false;
    withdraw = false; // чтобы после рестарта все работало норм
    crash();
    clearInterval(timer);
    time.dataset.after="x";
    waitBtn.style.display='none';
    startBtn.style.display="none"; //  Скрываем кнопку при завершении таймера
    infoTime.textContent="Множитель";

    // Отрисовка кнопок //
    if(start === true) {
      inGameStartBtn.style.display='inline';
    } else {
      noinGameStartBtn.style.display='inline';
    };

  } else {
    timeValue--;
    time.dataset.value=timeValue;
  };
};

// Stavka //

const startBtn = document.querySelector('.start-button');
const inGameStartBtn = document.querySelector('.ingame-start-button');
const noinGameStartBtn = document.querySelector('.noingame-start-button');
const waitBtn = document.querySelector('.wait-button');
const input = document.querySelector('.input-text');
const inputValue = document.querySelector('.input-value');

const inputBtn1 = document.querySelector('#btn1');
const inputBtn2 = document.querySelector('#btn2');
const inputBtn3 = document.querySelector('#btn3');
const inputBtn4 = document.querySelector('#btn4');

// Автовыбор иксов //
inputBtn1.onclick = () => {
  input.value = 1.2;
  input.setAttribute('value', input.value);
  inputBtn1.classList.add('active');
  inputBtn2.classList.remove('active');
  inputBtn3.classList.remove('active');
  inputBtn4.classList.remove('active');
};

inputBtn2.onclick = () => {
  input.value = 1.5;
  input.setAttribute('value', input.value);
  inputBtn2.classList.add('active');
  inputBtn1.classList.remove('active');
  inputBtn3.classList.remove('active');
  inputBtn4.classList.remove('active');
};

inputBtn3.onclick = () => {
  input.value = 2;
  input.setAttribute('value', input.value);
  inputBtn3.classList.add('active');
  inputBtn1.classList.remove('active');
  inputBtn2.classList.remove('active');
  inputBtn4.classList.remove('active');
};

inputBtn4.onclick = () => {
  input.value = 2.5;
  input.setAttribute('value', input.value);
  inputBtn4.classList.add('active');
  inputBtn1.classList.remove('active');
  inputBtn2.classList.remove('active');
  inputBtn3.classList.remove('active');
};

startBtn.addEventListener('click', clickHandler);
input.addEventListener('input', inputHandler);
inputValue.addEventListener('input', inputValueHandler);

function inputHandler() {
  input.setAttribute('value', input.value);
}

function inputValueHandler() {
  inputValue.setAttribute('value', inputValue.value);
}

// StartButton Handler //
function clickHandler() {
  startInputValue = inputValue.getAttribute('value');
  startValue = input.getAttribute('value');
  if(startValue <= balance) {
    balance = Math.round(balance * 100) / 100;
    balance -= startInputValue;
    balanceButton.dataset.balance=balance;

    crashMoney.dataset.money=startInputValue;
    startBtn.style.display="none";
    waitBtn.style.display='inline';
    start = true;
    inGame = true;

    userGame.style.display='flex';
    stavkaGameInfo.textContent='В игре';
    stavkaMoneyInfo.textContent=startInputValue;

  } else {
    alert('Недостаточно средств');
  }
};

// Вывод ставки //
inGameStartBtn.addEventListener('click', withdrawHandler);

function withdrawHandler() {
  let win = inputValue.value * timeValue;
  balance = Math.round(balance * 100) / 100;
  balance += win;
  balanceButton.dataset.balance=balance;
  inGameStartBtn.style.display='none';
  noinGameStartBtn.style.display='inline';
  withdraw = true;

  stavkaGameInfo.textContent=timeValue;
  stavkaGameInfo.dataset.gamex='x';
  stavkaGameInfo.style.color = '#8af29b';
  winMessage = true;
}

// История //

let crashHistory = document.querySelector('.crash-history');




