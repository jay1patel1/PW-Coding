class Question {
    constructor (question,option1,option2,option3,option4,correctAnswerIndex) {
        this.question = question;
        this.option = [option1,option2,option3,option4];
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

const paper1 = new QuestionBank;

paper1.qAdd("The Panama Canal connects which two bodies of water?", "Atlantic Ocean and Mediterranean Sea", "Pacific Ocean and Indian Ocean", "Atlantic Ocean and Pacific Ocean", "Mediterranean Sea and Red Sea", 2);

console.log(paper1);
console.log(paper1.option);