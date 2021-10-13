time = 60;
var counter = 0;
var score = 0;
var listOfQuestions = [{
    question: "What is the capital of Illinois?",
    wrong1: "Chicago",
    wrong2: "Albany",
    wrong3: "Christle",
    right: "Springfield"
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



];

var timeLeft = document.querySelector("#time-left")
var questionEl = document.querySelector("#question")
var answerEl1 = document.querySelector("#answer1")
var answerEl2 = document.querySelector("#answer2")
var answerEl3 = document.querySelector("#answer3")
var answerEl4 = document.querySelector("#answer4")
var rightOrWrongEl = document.querySelector("#right-or-wrong")

var clockCountdown = function () {
    timeLeft.textContent = (time + " seconds left");
    time = time - 1;
}
var clockRefresh = function () {
    timeLeft.textContent = (time + " seconds left")
    setInterval(clockCountdown, 1000);
    $("#start-btn").remove();

}
// var questionOne = JSON.parse(questionOne)



var newQuestion = function () {
    console.log(listOfQuestions[counter].question);
    rightOrWrongEl.textContent = ("");
    questionEl.textContent = (listOfQuestions[counter].question);
    answerEl1.textContent = (listOfQuestions[counter].wrong1);
    answerEl2.textContent = (listOfQuestions[counter].wrong2);
    answerEl3.textContent = (listOfQuestions[counter].wrong3);
    answerEl4.textContent = (listOfQuestions[counter].right);
    answerEl4.setAttribute("data-is-right", true);
    counter = counter + 1;
}

var checkAnswer = function () {
    if ($(this).attr("data-is-right")) {
        console.log("Correct");
        rightOrWrongEl.textContent = ("Correct");
        setTimeout(newQuestion, 2000);
        score = score + 1;
    }
    else {
        console.log("Wrong");
        rightOrWrongEl.textContent = ("Wrong");
        setTimeout(newQuestion, 2000);

    }
}




$("#start-btn").on("click", clockRefresh);
$("#start-btn").on("click", newQuestion);
$(".answer").on("click", checkAnswer);