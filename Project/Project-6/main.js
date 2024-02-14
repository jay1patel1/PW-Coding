class Question {
    constructor(question,optionArray,correctAns) {
        this.question = question;
        this.optionArray = optionArray;
        this.correctAns = correctAns;
    }
}

class UserProfile {
    constructor() {
        this.questionArray = [];
        this.tenRandomQuestion = [];
        this.questionCounter = 1;
        this.scoreCounter = 0;
        this.correctAnwsCounter = 0;
    }

    addQuestion (question,optionArray,correctAns) {
        const newObject = new Question(question,optionArray,correctAns);
        this.questionArray.push(newObject);
    }

    tenRandomQuestionGen () {
        let arr = this.questionArray;
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        this.tenRandomQuestion = arr.slice(0, 10)
    }

    fetchQuestion () {
        if (this.questionCounter < 11) {
            let returnQuestion = this.tenRandomQuestion[this.questionCounter-1];
            this.questionCounter = this.questionCounter + 1;
            return returnQuestion;
        } else {
            return null;
        }
    }

    checkQuestion (arrayIndex,answerIndex) {
        const question = this.tenRandomQuestion[arrayIndex];
        return answerIndex === question.correctAns;
    }

    reset () {
        this.questionCounter = 1;
        this.scoreCounter = 0;
        this.correctAnwsCounter = 0;
        user1.tenRandomQuestionGen();
    }
}

const user1 = new UserProfile();

user1.addQuestion("Which international organization serves as a forum for cooperation among major global economic powers and is often referred to as the 'Group of Seven'?", ["United Nations Security Council","World Trade Organization"," International Monetary Fund","G7 (Group of Seven)"],3);
user1.addQuestion("Which international organization aims to promote international monetary cooperation, exchange stability, and orderly exchange arrangements?", ["World Bank", "World Trade Organization", "International Monetary Fund", "United Nations Economic and Social Council"], 2);
user1.addQuestion("Which treaty established the European Union (EU), creating a unified economic and political entity among its member states?", ["Maastricht Treaty", "Lisbon Treaty", "Schengen Agreement", "NATO Treaty"], 1);
user1.addQuestion("Which country is a permanent member of the United Nations Security Council?", ["Germany", "Brazil", "Japan", "China"], 4);
user1.addQuestion("Which international agreement aims to combat climate change by reducing greenhouse gas emissions?", ["Paris Agreement", "Kyoto Protocol", "Montreal Protocol", "Copenhagen Accord"], 1);
user1.addQuestion("Which organization is responsible for maintaining peace and security among its member states and has the authority to deploy peacekeeping missions?", ["NATO", "European Union", "United Nations", "African Union"], 3);
user1.addQuestion("Which country is the world's largest exporter of goods?", ["China", "United States", "Germany", "Japan"], 1);
user1.addQuestion("Which international organization facilitates cooperation in areas such as agriculture, food security, and rural development?", ["World Health Organization", "Food and Agriculture Organization", "World Bank", "International Labor Organization"], 2);
user1.addQuestion("Which event marked the end of World War II and led to the division of Europe into Eastern and Western blocs?", ["Yalta Conference", "Potsdam Conference", "Tehran Conference", "Casablanca Conference"], 2);
user1.addQuestion("Which ideology advocates for the establishment of a classless society and common ownership of the means of production?", ["Capitalism", "Socialism", "Fascism", "Anarchism"], 2);
user1.addQuestion("Which country is considered the world's largest democracy by population size?", ["China", "India", "United States", "Russia"], 2);
user1.addQuestion("Which international organization is responsible for coordinating responses to global health issues and emergencies?", ["World Health Organization", "United Nations Educational, Scientific and Cultural Organization", "International Red Cross and Red Crescent Movement", "World Bank"], 1);
user1.addQuestion("Which city is home to the headquarters of the United Nations?", ["Geneva", "Brussels", "New York City", "Vienna"], 3);
user1.addQuestion("Which agreement aimed to establish a single European currency, the Euro, and further economic integration among European Union member states?", ["Maastricht Treaty", "Lisbon Treaty", "Schengen Agreement", "NATO Treaty"], 1);
user1.addQuestion("Which country has the world's largest proven oil reserves?", ["Saudi Arabia", "Venezuela", "Russia", "United States"], 2);
user1.addQuestion("Which international organization is primarily responsible for setting global standards for telecommunications and information and communication technologies?", ["United Nations Development Programme", "International Telecommunication Union", "World Trade Organization", "World Bank"], 2);
user1.addQuestion("Which region has been the focus of the United Nations' peacekeeping mission since the 1948 Arab-Israeli War?", ["Balkans", "Korean Peninsula", "Middle East", "Central Africa"], 3);
user1.addQuestion("Which country is a founding member of the North Atlantic Treaty Organization (NATO)?", ["Germany", "Russia", "France", "United States"], 4);
user1.addQuestion("Which treaty established the principle of collective defense among its member states, stating that an attack on one member is an attack on all?", ["Warsaw Pact", "North Atlantic Treaty", "SEATO Treaty", "Rio Treaty"], 2);
user1.addQuestion("Which international organization is responsible for regulating international trade and resolving disputes between member states?", ["International Monetary Fund", "World Bank", "World Trade Organization", "European Union"], 3);

user1.reset();
