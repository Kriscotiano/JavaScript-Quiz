function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.quizEnd = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
    
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

//Add Question and Choices
function populate() {
    if(quiz.quizEnd()) {
        //showScores();
    } else {
        //show question
        let element = document.getElementById('question');
        element.textContent = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById('btn' + i);
            element.textContent = choices[i];
        }
    }
}

//Questions
let questions = [
    new Question('Which of the following is NOT a primitive type in JavaScript?', ['Boolean', 'Undefined', 'Object', 'String'], 'Object'),
    new Question('What will 3 > 2 > 1 return?', ['3', 'True', 'Undefined', 'False'], 'False')
];

let quiz = new Quiz(questions);


populate();
