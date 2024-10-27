const moves = [
  'rock',
  'paper',
  'scissors'
];
let gameBtns = document.querySelectorAll('.gameBtn');

for (const btn of gameBtns) {
  btn.addEventListener('click', play);
}

function computerMove() {
  return moves.at(Math.floor(Math.random() * 3));
}

const gameArea = document.querySelector('.game-area');

showResultArea = document.querySelector('.show-result-area');
showResultArea.classList.add('d-none');


winPart = document.querySelector('.win-scenario');
losePart = document.querySelector('.lose-scenario');
deucePart = document.querySelector('.deuce-scenario');

// rulesArea.classList.add('d-none');


function play() {
  const userMove = this.id;
  const pcMove = computerMove();
  gameArea.classList.add('d-none');
  let counter = 0;

  if (userMove==='paper'&& pcMove=='rock') {

    showResultArea.classList.remove('d-none');
    paperRock.classList.add('d-flex');
    paperRock.classList.toggle('result-sample');
    losePart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('pap-rock');
    counter++;
    scoreTxt.innerText += counter;
    
  }
  else if (userMove==='paper'&& pcMove=='scissors') {
    showResultArea.classList.remove('d-none');
    paperScissors.classList.add('d-flex');
    paperScissors.classList.toggle('result-sample');
    winPart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('kağıt-makas');

  }
  else if (userMove==='paper'&& pcMove=='paper') {
    showResultArea.classList.remove('d-none');
    paperPaper.classList.add('d-flex');
    paperPaper.classList.toggle('result-sample');
    losePart.classList.add('d-none');
    winPart.classList.add('d-none');
    deucePart.classList.add('d-block');
    console.log('pap-pap');

  }

  else if (userMove==='rock'&& pcMove=='scissors') {
    showResultArea.classList.remove('d-none');
    rockScissors.classList.add('d-flex');
    rockScissors.classList.toggle('result-sample');
    losePart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('rock-sci');
    counter++;
    scoreTxt.innerText += counter;

  }

  else if (userMove==='rock'&& pcMove=='paper') {
    showResultArea.classList.remove('d-none');
    rockPaper.classList.add('d-flex');
    rockPaper.classList.toggle('result-sample');
    winPart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('rock-pap');
  }


  else if (userMove==='rock'&& pcMove=='rock') {
    showResultArea.classList.remove('d-none');
    rockRock.classList.add('d-flex');
    rockRock.classList.toggle('result-sample');
    winPart.classList.add('d-none');
    losePart.classList.add('d-none');
    deucePart.classList.add('d-block');
    console.log('rock-rock');

  }

  else if (userMove==='scissors'&& pcMove=='paper') {
    showResultArea.classList.remove('d-none');
    scissorsPaper.classList.add('d-flex');
    scissorsPaper.classList.toggle('result-sample');
    losePart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('sci-pap');
    counter++;
    scoreTxt.innerText+= counter;

  }

  else if (userMove==='scissors'&& pcMove=='rock') {
    showResultArea.classList.remove('d-none');
    scissorsRock.classList.add('d-flex');
    scissorsRock.classList.toggle('result-sample');
    winPart.classList.add('d-none');
    deucePart.classList.add('d-none');
    console.log('sci-rock');

  }

  else if (userMove==='scissors'&& pcMove=='scissors') {
    showResultArea.classList.remove('d-none');
    scissorsScissors.classList.add('d-flex');
    scissorsScissors.classList.toggle('result-sample');
    losePart.classList.add('d-none');
    winPart.classList.add('d-none');
    deucePart.classList.add('d-block');
    console.log('sci-sci');
  }

  // heroArea.classList.add("d-none");
}

function playMove() {

 
}

// function oyna() {
//   const hamle = gameBtns.
//   oyuncuHamle.innerText = hamle;
//   const bilgisayarinHamlesi = bilgisayarOyna();
//   bilgisayarHamle.innerText = bilgisayarinHamlesi;

//   if(hamle === bilgisayarinHamlesi) {
//     kazananBilgi.innerText = 'Berabere';
//   } else if(hamle === 'taş' && bilgisayarinHamlesi === 'makas') {
//     kazananBilgi.innerText = 'Oyuncu';
//     oyuncuSkor++;
//   } else if(hamle === 'makas' && bilgisayarinHamlesi === 'kağıt') {
//     kazananBilgi.innerText = 'Oyuncu';
//     oyuncuSkor++;
//   } else if(hamle === 'kağıt' && bilgisayarinHamlesi === 'taş') {
//     kazananBilgi.innerText = 'Oyuncu';
//     oyuncuSkor++;
//   } else {
//     kazananBilgi.innerText = 'Bilgisayar';
//     bilgisayarSkor++;
//   }

//   oyuncuSkorTxt.innerText = oyuncuSkor;
//   bilgisayarSkorTxt.innerText = bilgisayarSkor;
// }