$(document).ready(function(){
  var scores = localStorage.getItem("savedScores")
  printHighscores()
  
  function printHighscores() {
    // either get scores from localstorage or set to empty array
    if (scores !== null) {
      console.log(scores);
    }else{
      console.log('else');
    }

    // sort highscores by score property in descending order

  }

  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
});