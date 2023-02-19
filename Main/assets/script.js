var startButton = document.querySelector( ".start-btn" );
var startPage = document.querySelector( ".start-container" );
var quizPage = document.querySelector( ".quiz-container" );
var lastPage = document.querySelector( ".last-page" );
var timerEl = document.getElementById( "countdown" );
var questionEl = document.getElementById( "question" );
var aText = document.getElementById( "answer-a" );
var bText = document.getElementById( "answer-b" );
var cText = document.getElementById( "answer-c" );
var dText = document.getElementById( "answer-d" );
var rightWrong = document.getElementById( "right-wrong" );
var timeLeft = 60;

quizPage.style.display = "none";
lastPage.style.display = "none";

startButton.addEventListener( 'click', function() {
    startPage.style.display = "none";
    quizPage.style.display = "flex";
    countDown();
    showQuestion(0);
});

function countDown() {
    var timerInterval = setInterval(function() {
        timerEl.innerHTML = timeLeft + " Second(s)";
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function deductTime(seconds) {
    timeLeft -= seconds;
}

function stopTimer() {
    clearInterval(timerInterval);
}