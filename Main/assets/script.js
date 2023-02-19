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

function showQuestion(index) {
    var questions = [
        {
            question: "Who does Andy give the nickname 'big tuna' to?",
            answers: [
                { text: 'Jim Halpert', correct: true },
                { text: 'Michael Scott', correct: false },
                { text: 'Ryan Howard', correct: false },
                { text: 'kevin Malone', correct: false },
            ]

        },
        {
            question: "Where did Jim propose to Pam?",
            answer: [
                { text: 'Gas Station', correct: true },
                { text: 'Niagra Falls', correct: false },
                { text: 'On the rooftop of Dunder Mifflin', correct: false },
                { text: 'Inside the Office', correct: false },
            ]
        },
        {
            question: "What Ivy League school did Andy go to?",
            answer: [
                { text: 'Cornell', correct: true },
                { text: 'Harvard', correct: false },
                { text: 'Dartmouth', correct: false },
                { text: 'Yale', correct: false },
            ]
        },
        {
            question: "How does Stanley spend his time during conference room meetings?",
            answer: [
                { text: 'Crossword Puzzles', correct: true },
                { text: 'On Facebook', correct: false },
                { text: 'Whispering with Others', correct: false },
                { text: 'Listening to his headphones', correct: false },
            ]
        }
    ]
}