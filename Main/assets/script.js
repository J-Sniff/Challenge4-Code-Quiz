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
var index = 0;
var timerInterval;
var finalButton = document.querySelector( ".final-btn" );
var finalScore = document.getElementById( "final-score" );
var finalForm = document.querySelector( ".final-form" );

var highscorePage = document.querySelector( ".highscores-container" );

var goBack = document.querySelector( ".go-back" );
var goBack2 = document.querySelector( ".go-back-2" );

var clearHighscore = document.querySelector( ".clear-highscore" );
var viewHighscore = document.querySelector( ".highscore-btn" );
var playAgain = document.querySelector( ".play-again-btn" );

var highscore = JSON.parse( localStorage.getItem("highscores")) || [];
var highscoreList = document.getElementById( "highscore-list" );

quizPage.style.display = "none";
lastPage.style.display = "none";
highscorePage.style.display = "none";
goBack.style.display = "none";
goBack2.style.display = "none";

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
            quizPage.style.display = "none";
            lastPage.style.display = "flex";
            finalScore.innerHTML = "You did not beat the clock, until next time!"
            finalForm.style.display = "none";
        }
    }, 1000);
}

function deductTime(seconds) {
    timeLeft -= seconds;
}

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
        answers: [
            { text: 'Gas Station', correct: true },
            { text: 'Niagra Falls', correct: false },
            { text: 'On the rooftop of Dunder Mifflin', correct: false },
            { text: 'Inside the Office', correct: false },
        ]
    },
    {
        question: "What Ivy League school did Andy go to?",
        answers: [
            { text: 'Cornell', correct: true },
            { text: 'Harvard', correct: false },
            { text: 'Dartmouth', correct: false },
            { text: 'Yale', correct: false },
        ]
    },
    {
        question: "How does Stanley spend his time during conference room meetings?",
        answers: [
            { text: 'Crossword Puzzles', correct: true },
            { text: 'On Facebook', correct: false },
            { text: 'Whispering with Others', correct: false },
            { text: 'Listening to his headphones', correct: false },
        ]
    },
    {
        question: "What does Jim hide Dwight's stapler in?",
        answers: [
            { text: 'Jello', correct: true },
            { text: 'Cake', correct: false },
            { text: 'Pudding', correct: false },
            { text: 'Glass Box', correct: false },
        ]
    }
]

function showQuestion(index) {

    if (index >= questions.length) {
        clearInterval(timerInterval);
        quizPage.style.display = "none";
        lastPage.style.display = "flex";
        timerEl.innerHTML = "Time's up!";
        finalScore.innerHTML = "Final Score: " + timeLeft;
        return;
    } 

    document.getElementById( "question" ).innerHTML = questions[index].question;
    document.getElementById( "answer-a" ).innerHTML = questions[index].answers[0].text;
    document.getElementById( "answer-b" ).innerHTML = questions[index].answers[1].text;
    document.getElementById( "answer-c" ).innerHTML = questions[index].answers[2].text;
    document.getElementById( "answer-d" ).innerHTML = questions[index].answers[3].text;
}

if (index <= 3) {
    aText.addEventListener( 'click', function() {
        console.log(questions[index]);
        if (questions[index].answers[0].correct === true) {
            rightWrong.innerHTML = "Correct!";
            index++;
            return showQuestion(index);
        } else {
            rightWrong.innerHTML = "Incorrect"
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    bText.addEventListener( 'click', function() {
        console.log(questions[index]);
        if (questions[index].answers[1].correct === true) {
            rightWrong.innerHTML = "Correct!";
            index++;
            return showQuestion(index);
        } else {
            rightWrong.innerHTML = "Incorrect"
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    cText.addEventListener( 'click', function() {
        console.log(questions[index]);
        if (questions[index].answers[2].correct === true) {
            rightWrong.innerHTML = "Correct!";
            index++;
            return showQuestion(index);
        } else {
            rightWrong.innerHTML = "Incorrect"
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });

    dText.addEventListener( 'click', function() {
        console.log(questions[index]);
        if (questions[index].answers[3].correct === true) {
            rightWrong.innerHTML = "Correct!";
            index++;
            return showQuestion(index);
        } else {
            rightWrong.innerHTML = "Incorrect"
            deductTime(10);
            index++;
            return showQuestion(index);
        }
    });
}

finalButton.addEventListener( "click", function(event) {
    event.preventDefault();
    goBack.style.display = "block";
    goBack2.style.dispaly = "none";

    var initials = document.getElementById("initials").value;
    var messageDiv = document.querySelector(".message.div");

    if (initials === "" ) {
        messageDiv.innerHTML = "Initials Here"
        return;
    }

    highscorePage.style.display = "flex";
    lastPage.style.display = "none";

    highscore.push({ initials, timeLeft });

    localStorage.setItem("highscores", JSON.stringify(highscore));
    console.log(highscore);

    highscoreList.innerHTML = "";
    for (var i = 0; i < highscore.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscore[i].initials + " - " + highscore[i].timeLeft;
        highscoreList.appendChild(li);
    }

});

goBack.addEventListener('click', function () {
    lastPage.style.display = "flex";
    highscorePage.style.display = "none";
});

goBack2.addEventListener('click', function () {
    lastPage.style.display = "flex";
    highscorePage.style.display = "none";
});

clearHighscore.addEventListener('click', function() {
    localStorage.clear();
    highscoreList.textContent = "";
});

playAgain.addEventListener('click', function () {
    lastPage.style.display = "none";
    startPage.style.display = "flex";
    location.reload();
});

viewHighscore.addEventListener('click', function() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    lastPage.style.display = "none";
    highscorePage.style.display = "flex";
    goBack2.style.display = "block";

    highscoreList.innerHTML = "";
    for (var i = 0; i < highscore.length; i++) {
        var li = document.createElement("li");
        li.textContent = highscore[i].initials + " - " + highscore[i].timeLeft;
        highscoreList.appendChild(li);
    }
});