"use strict";

var _questions = require("./questions.js");

var questionNumber = 0;
var firstQuestionArray = _questions.firstQ;
var secondQuestionArray = _questions.secondQ;
var thirdQuestionArray = _questions.thirdQ;
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var timer = document.getElementById('timer');
var rollButton = document.getElementById('roll');
var counter;

var rand = function rand() {
  questionNumber++;
  restartTimer();

  switch (questionNumber) {
    case 1:
      q1.innerText = getRandomElement(firstQuestionArray);
      break;

    case 2:
      q2.innerText = getRandomElement(secondQuestionArray);
      break;

    case 3:
      q3.innerText = getRandomElement(thirdQuestionArray);
      break;

    default:
      questionNumber = 0;
      clearQuestions();
      stopTimer();
      break;
  }
};

function stopTimer() {
  clearInterval(counter);
  timer.innerText = '03:00';
}

function restartTimer() {
  stopTimer();
  var initialTime = 180;
  counter = setInterval(function () {
    if (initialTime < 0) {
      clearInterval(counter);
    }

    initialTime--;
    var minutes = ("0" + Math.floor(initialTime / 60)).substr(-2);
    var seconds = ("0" + initialTime % 60).substr(-2);
    timer.innerText = "".concat(minutes, ":").concat(seconds);
  }, 1000);
}

function getRandomElement(array) {
  var question = Math.floor(Math.random() * array.length);
  return array[question];
}

function clearQuestions() {
  q1.innerText = q2.innerText = q3.innerText = "";
}

rollButton.addEventListener('click', rand);