import {firstQ, secondQ} from './questions.js';
let questionNumber = 0;
let firstQuestionArray = firstQ;
let secondQuestionArray = secondQ;
let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let timer = document.getElementById('timer');
let rollButton = document.getElementById('roll');
let counter;
let initialTime;

const rand = () => {
  questionNumber++;
  restartTimer();
  switch (questionNumber) {
    case 1:
      q1.innerText = getRandomElement(firstQuestionArray);
      break;
    case 2:
      q2.innerText = getRandomElement(secondQuestionArray);
      break;
    default:
      questionNumber = 0;
      clearQuestions();
      stopTimer();
      break;
  }
}

function stopTimer() {
  clearInterval(counter);
  timer.innerText = '03:00';
}

function restartTimer() {
  stopTimer();
  initialTime = 180;
  counter = setInterval(() => {
    if(initialTime <= 0) {
      clearInterval(counter);
    } else {
      initialTime--;
      let minutes = ("0"+Math.floor(initialTime/60)).substr(-2);
      let seconds = ("0"+(initialTime%60)).substr(-2);
      timer.innerText = `${minutes}:${seconds}`;
    }
  }, 1000);
}

function getRandomElement(array) {
  let question = Math.floor(Math.random() * array.length);
  return array[question];
}

function clearQuestions() {
  q1.innerText = q2.innerText = "";
}

rollButton.addEventListener('click', rand);