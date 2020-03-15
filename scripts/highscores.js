$(document).ready(function () {
  var highScore = JSON.parse(localStorage.getItem('highScores')) || [];
  var backBtn = $('#back');
  var clearBtn = $('#clear');

  printHighscores()

  function printHighscores() {
    if (highScore !== null) {
      for (var i = 0; i < highScore.length; i++) {
        $('#scoreboard').append('<li>' + highScore[i].initials + ' - ' + highScore[i].score + '</li>');
      }
    }
  }

  function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }

  $(backBtn).on('click', function () {
    window.location.href = 'index.html';
  });
  $(clearBtn).on('click', function () {
    localStorage.removeItem('highScores');
    $('#scoreboard').empty();
  });
});