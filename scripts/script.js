$(document).ready(function(){

  //TODO add list of questions
  var myQuestions = [{
    question: "What is blue?",
    choices: ['1','2','3','4'],
    correctAnswer: '3'
  },{
    question: "What is blue?",
    choices: ['1','2','3','4'],
    correctAnswer: 'b'
  },{
    question: "What is blue?",
    choices: ['1','2','3','4'],
    correctAnswer: 'b'
  },{
    question: "What is blue?",
    choices: ['1','2','3','4'],
    correctAnswer: 'b'
  }];

  // variables to keep track of quiz state
  var currentQuestionIndex = 0;
  var time = myQuestions.length * 15;
  var timerId;

  // variables to reference DOM elements
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var submitBtn = document.getElementById("submit");
  var startBtn = document.getElementById("start");
  var initialsEl = document.getElementById("initials");
  var feedbackEl = document.getElementById("feedback");
  var title = document.getElementById("question-title");

  function startQuiz() {
    // hide start screen
    $('#start-screen').hide();

    // un-hide questions section
    $(questionsEl).show();

    // start timer
    clockTick(time);

    // show starting time
    $(timerEl).text(time);

    getQuestion();
  }

  function getQuestion() {
    // get current question object from array
    currentquestion = myQuestions[currentQuestionIndex].question;

    // update title with current question
    $(title).text(currentquestion);

    // clear out any old question choices

    // loop over choices
    var choices = myQuestions[currentQuestionIndex].choices;
    

    for (var choice = 1 ; choice <= choices.length; choice++){
      // create new button for each choice
      $(choicesEl).append("<button>" + choice + "</button>");
      
      
      // attach click event listener to each choice
      $('button').on('click', function(){
        questionClick();
      });
    }

      // display on the page
  }

  function questionClick() {
    console.log('clicked');
    // check if user guessed wrong and penalize time if incorrect
    // display new time on page


    // else show correct feedback


    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions

  }

  function quizEnd() {
    // stop timer
    time == 0;

    // show end screen
    $('#end-screen').show();

    // show final score

    // hide questions section
    $(questionsEl).hide();
  }

  function clockTick(time) {
    // update time
    var timerInterval = setInterval(function() {
        time--;
        timerEl.textContent = time;

         // check if user ran out of time
        if(time <= 0) {
            clearInterval(timerInterval);
            quizEnd();
        }

    }, 1000); 
  }

  function saveHighscore() {
    // get value of input box
  // var initials = ???

    // make sure value wasn't empty
    //if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array


      // format new score object for current user

      // save to localstorage


      // redirect to next page

    //}
  }
  // user clicks button to submit initials

  // user clicks button to start quiz
  $(startBtn).on('click', function(){
    startQuiz();
  });  
})