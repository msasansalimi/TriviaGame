// The timer function which is adjusted for 30s.

var number = 30;
var intervalId;

function timer() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#timer").empty();
    $("#timer").append("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time is over!")
        quizScore();
    }
}
function stop() {
    clearInterval(intervalId);
}

// On clicking start button, below function will be activated.

$("#start").on("click", function () {
    $("#start").remove(); // To remove the start button.
    timer(); //Calling the timer function on line 6.
    //Below function append questions and answer starting from line 45 to the main container.
    for (var i = 0; i < questions.length; i++) {
        $("#main-container").append("<p>" + questions[i].question + "</p>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            var input = $("<input>"); // Defining the radio button and assigning attributes.
            input.attr("type", "radio");
            input.attr("name", "question-" + i);
            input.attr("value", questions[i].answers[j]);
            $("#main-container").append(input).append(questions[i].answers[j]); //Here we are appending the radio button to each answers beloging to each question.

        }
    }
})
// Variable that contains questions, answers, and the right answers.
var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ['A Bug\'s Life', "Monsters Inc.", "Toy Story", "The Lion King"],
    rightAnswer: "Toy Story"
}, {
    question: "Which of these is NOT  name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    rightAnswer: "Fred Spice"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    rightAnswer: "Chicago Bulls"
}, {
    question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
    answers: ["Nirvana", "Backstreet Boys", "The offspring", "No Doubt"],
    rightAnswer: "Nirvana"
}, {
    question: "Which popular Disney movie featured the song, 'Circle of Life'?",
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    rightAnswer: "Toy Lion King"


}];
// Function for comparing input answer with the right answer and updating the score.
function quizScore() {
    var correctAnswers = 0;
    var inCorrectAnswers = 0;

    var q0Answer = questions[0].rightAnswer;
    var q1Answer = questions[1].rightAnswer;
    var q2Answer = questions[2].rightAnswer;
    var q3Answer = questions[3].rightAnswer;
    var q4Answer = questions[4].rightAnswer;
    // For selects, checkboxes and radio buttons, we can use :checked to select the right element.
    var q0Guess = $("input[name='question-0']:checked").attr("value");
    var q1Guess = $("input[name='question-1']:checked").attr("value");
    var q2Guess = $("input[name='question-2']:checked").attr("value");
    var q3Guess = $("input[name='question-3']:checked").attr("value");
    var q4Guess = $("input[name='question-4']:checked").attr("value");

    //Comparing and updating the scores.

    if (q0Answer === q0Guess) {
        correctAnswers++;
    } else {
        inCorrectAnswers++;
    }
    if (q1Answer === q1Guess) {
        correctAnswers++;
    } else {
        inCorrectAnswers++;
    }
    if (q2Answer === q2Guess) {
        correctAnswers++;
    } else {
        inCorrectAnswers++;
    }
    if (q3Answer === q3Guess) {
        correctAnswers++;
    } else {
        inCorrectAnswers++;
    }
    if (q4Answer === q4Guess) {
        correctAnswers++;
    } else {
        inCorrectAnswers++;
    }
    //After the timer get to 0 we have the below commands in order to empty the main container and replace the updated scores.
    $("#main-container").empty();

    var h1 = $("<h1>");
    h1.text("Correct answer:" + correctAnswers);
    var h2 = $("<h1>");
    h2.text("Incorrect answers:" + inCorrectAnswers);
    var h3 = $("<h1>");
    h3.text("It`s Done!");

    $("#main-container").append(h1, h2, h3);


};