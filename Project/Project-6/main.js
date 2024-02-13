class Question {
    constructor (question,option1,option2,option3,option4,correctAnswerIndex) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correctAnswer = correctAnswerIndex;
    }
}

class QuestionBank {
    constructor () {
        this.questionArray = [];
    }

    qAdd (question,option1,option2,option3,option4,correctAnswerIndex) {
        const newQuestion = new Question(question,option1,option2,option3,option4,correctAnswerIndex);
        this.questionArray.push(newQuestion);
    };
    
}