
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.quizEnd = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}



//Add Question and Choices
function populate() {
    if (quiz.quizEnd()) {
        //Quiz results
        showScores();
    } else {
        //show question
        let element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById('btn' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    let currentQuestionNum = quiz.questionIndex + 1;
    let element = document.getElementById('progress');
    element.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
};

function showScores() {
    let gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2>" + quiz.score + " correct out of " + quiz.questions.length + "</h2>";
    let element = document.querySelector('.box');
    element.innerHTML = gameOverHtml;
};

//Questions
let questions = [
    new Question('Which of the following is NOT a primitive type in JavaScript?', ['Boolean', 'Undefined', 'Object', 'String'], 'Object'),
    new Question('What will 3 > 2 > 1 return?', ['3', 'True', 'Undefined', 'False'], 'False'),
    new Question('What is the result? Number("1") - 1 == 0;', ['True', 'False', 'TypeError', 'Null'], 'True'),
    new Question('What is the function of the Array object that adds and/or removes elements from an array?', ['splice()', 'slice()', 'unshift()', 'filter()'], 'splice()'),
    new Question('Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?', ['pop()', 'join()', 'push()', 'shift()'], 'push()'),
    new Question('When does the keyword "this" reference anything in the code?', ['As soon as it\'s written', 'When an event listener is added', 'When the browser is loaded', 'When the function/method containing it is invoked'], 'When the function/method containing it is invoked')
];

let quiz = new Quiz(questions);


populate();




