time = 60;
var counter = 0;
var initialIdCounter = 0;
var score = 0;
var listOfQuestions = [{
    question: "What is bootstrap",
    wrong1: "an article of clothing",
    wrong2: "a city in illinois",
    wrong3: "a type of car",
    right: "a style sheet we can all use"
},
{
    question: "What does CSS stand for?",
    wrong1: "Cucumber Sandwich Sheets",
    wrong2: "Cascading Sandwich Sheets",
    wrong3: "Cascading Style Sandwiches",
    right: "Cascading Style Sheets",
},
{
    question: "What does HTML stand for?",
    wrong1: "Hyper Text Markup Lunch",
    wrong2: "Hydro Text Markup Language",
    wrong3: "Hyper Tupperware Markup Language",
    right: "Hyper Text Markup Language",
},
{
    question: "What does js stand for?",
    wrong1: "junior seniro",
    wrong2: "just sippin",
    wrong3: "joly sancher",
    right: "javascript",
},
];

var timeLeft = document.querySelector("#time-left")
var questionEl = document.querySelector("#question")
var answerEl1 = document.querySelector("#answer1")
var answerEl2 = document.querySelector("#answer2")
var answerEl3 = document.querySelector("#answer3")
var answerEl4 = document.querySelector("#answer4")
var rightOrWrongEl = document.querySelector("#right-or-wrong")
var scoreEl = document.querySelector("#score")
var finalScoreEl = document.querySelector("#final-score")
var highScoreEl = document.querySelector("#highscore")
var listOfHighScores = [];

var clockCountdown = function () {
    timeLeft.textContent = (time + " seconds left");
    time = time - 1;
    if (time < 0) {
        gameOver();
        time = 99999;
    };

}
var clockRefresh = function () {
    timeLeft.textContent = (time + " seconds left")
    var timer = setInterval(clockCountdown, 1000);
    $("#start-btn").remove();



}

var loadScores = function () {
    var savedScores = localStorage.getItem("scores");
    if (!savedScores) {
        return false;
    }
    console.log("Saved scores found!");

    savedScores = JSON.parse(savedScores)
    for (var i = 0; i < savedScores.length; i++) {
        listOfHighScores.push(savedScores[i]);
        var storedInitials = savedScores[i]["initials"];
        var storedScore = savedScores[i]["score"];
        $("#highscore").append(storedInitials, " : ", storedScore, "<br/>")
        console.log(storedInitials, storedScore)
        initialIdCounter++
    }
};


var gameOver = function () {
    questionEl.remove()
    answerEl1.remove()
    answerEl2.remove()
    answerEl3.remove()
    answerEl4.remove()
    rightOrWrongEl.remove()
    timeLeft.remove();
    finalScoreEl.textContent = ("Your final score is " + score);
    var initials = window.prompt("What are your initials?");
    var highScoreObj = {
        "initials": initials,
        "score": score,
        "id": initialIdCounter
    };
    listOfHighScores.push(highScoreObj);
    listOfHighScores = JSON.stringify(listOfHighScores);
    localStorage.setItem("scores", listOfHighScores);
    time = 99999


}

var newQuestion = function () {
    if (counter < listOfQuestions.length) {
        console.log(listOfQuestions[counter].question);
        questionEl.textContent = (listOfQuestions[counter].question);
        answerEl1.textContent = (listOfQuestions[counter].wrong1);
        answerEl2.textContent = (listOfQuestions[counter].wrong2);
        answerEl3.textContent = (listOfQuestions[counter].wrong3);
        answerEl4.textContent = (listOfQuestions[counter].right);
        answerEl4.setAttribute("data-is-right", true);
        counter = counter + 1;
    }
    else {
        gameOver();
    }
}

var checkAnswer = function () {
    if ($(this).attr("data-is-right")) {
        console.log("Correct");
        rightOrWrongEl.textContent = ("Correct");
        rightOrWrongEl.className = ("correct");
        setTimeout(newQuestion, 200);
        score = score + 1;
        scoreEl.textContent = ("Score: " + score);

    }
    else {
        console.log("Wrong");
        rightOrWrongEl.textContent = ("Wrong");
        rightOrWrongEl.className = ("wrong");
        time = time - 5;
        setTimeout(newQuestion, 200);
        scoreEl.textContent = ("Score: " + score)

    }
}



loadScores()
$("#start-btn").on("click", clockRefresh);
$("#start-btn").on("click", newQuestion);
$(".answer").on("click", checkAnswer);