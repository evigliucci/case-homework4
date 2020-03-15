$(document).ready(function () {

  var myQuestions = [{
    question: "JavaScript code can be called by using",
    choices: ['RMI', 'Triggering Event', 'Preprocessor', 'Function / Method'],
    correctAnswer: 4
  }, {
    question: "The snippet that has to be used to check if “a” is not equal to “null” is",
    choices: ['if(a!=null)', 'if(a!==null)', 'if (!a)', 'if(a!null)'],
    correctAnswer: 2
  }, {
    question: "The statement a===b refers to",
    choices: [
      'Both a and b are equal in value, type and reference address',
      'Both a and b are equal in value',
      'Both a and b are equal in value and type',
      'There is no such statement'
    ],
    correctAnswer: 3
  }, {
    question: "Which is not a Javascript Date Type",
    choices: ['Method', 'Number', 'String', 'Object'],
    correctAnswer: 1
  }];

  var currentQuestionIndex = 0;
  var time = myQuestions.length * 25;

  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var submitBtn = document.getElementById("submit");
  var startBtn = document.getElementById("start");
  var initialsEl = document.getElementById("initials");
  var feedbackEl = document.getElementById("feedback");
  var title = document.getElementById("question-title");
  var timerInterval;
  var finalScore;
  var highScore = JSON.parse(localStorage.getItem("highScores")) || [];


  function startQuiz() {
    $('#start-screen').hide();
    $(questionsEl).show();
    clockTick(time);
    $(timerEl).text(time);
    getQuestion();
  }

  function getQuestion() {
    if ($(choicesEl).children().length > 0) {
      $(choicesEl).empty();
    }

    currentquestion = myQuestions[currentQuestionIndex].question;
    $(title).text(currentquestion);

    var choices = myQuestions[currentQuestionIndex].choices;
    var answer = myQuestions[currentQuestionIndex].correctAnswer;

    for (var i = 0; i < choices.length; i++) {
      if (choices[i] == answer) {
        $(choicesEl).append("<button class='true'>" + choices[i] + "</button>");
      } else {
        $(choicesEl).append("<button>" + choices[i] + "</button>");
      }
    }
    $('.choices button').on('click', function () {
      questionClick(this);
    });
  }

  function questionClick(selection) {
    if ($(selection).hasClass("true")) {
      $("#message").html('Correct! Great Job.')
      lastQuestion();
    } else {
      $("#message").html('<p>Sorry, wrong answer.</p>')
      lastQuestion();
      time = time - 10;
    }
  }

  function lastQuestion(){
    if (currentQuestionIndex == myQuestions.length - 1) {
      quizEnd();
    } else {
      currentQuestionIndex++;
      getQuestion();
    }
  }

  function quizEnd() {
    finalScore = time;
    $(questionsEl).hide();
    $('#end-screen').show();
    $('#final-score').html(finalScore);
    clearInterval(timerInterval);
  }

  function clockTick() {
    timerInterval = setInterval(function () {
      time--;
      timerEl.textContent = time;

      if (time <= 0) {
        clearInterval(timerInterval);
        quizEnd();
      }
    }, 1000);
  }

  function saveHighscore() {
    var initials = $(initialsEl).val();

    if (initials !== "") {
      var score = {
        'initials': initials,
        'score': finalScore
      };

      highScore.push(score);
      highScore.sort((a, b) => {
        return b.score - a.score;
      });
      localStorage.setItem('highScores', JSON.stringify(highScore));

      window.location.href = 'highscores.html';
    }
  }

  $(submitBtn).on('click', function (e) {
    e.preventDefault();
    saveHighscore();
  });

  $(startBtn).on('click', function () {
    startQuiz();
  });
})