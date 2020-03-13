// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

//TODO add list of questions
var myQuestions = [{
		question: "What is blue?",
		answers: {
			a: '3',
			b: '5',
      c: '115',
      d: '43',
		},
		correctAnswer: 'b'
	},{
		question: "What is blue?",
		answers: {
			a: '3',
			b: '5',
      c: '115',
      d: '43',
		},
		correctAnswer: 'b'
  },{
		question: "What is blue?",
		answers: {
			a: '3',
			b: '5',
      c: '115',
      d: '43',
		},
		correctAnswer: 'b'
  },{
		question: "What is blue?",
		answers: {
			a: '3',
			b: '5',
      c: '115',
      d: '43',
		},
		correctAnswer: 'b'
  },
];

function startQuiz() {
  // hide start screen
  
  // un-hide questions section

  // start timer

  // show starting time

  getQuestion();
}

function getQuestion() {
  // get current question object from array

  // update title with current question

  // clear out any old question choices

  // loop over choices

    // create new button for each choice

    // attach click event listener to each choice


    // display on the page

}

function questionClick() {
  // check if user guessed wrong and penalize time if incorrect
  // display new time on page


  // else show correct feedback


  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions

}

function quizEnd() {
  // stop timer


  // show end screen


  // show final score

  // hide questions section

}

function clockTick() {
  // update time


  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = ???

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array


    // format new score object for current user

    // save to localstorage


    // redirect to next page

  }
}


// user clicks button to submit initials

// user clicks button to start quiz

