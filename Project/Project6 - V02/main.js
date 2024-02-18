class Question {
    constructor(question, optionsArray, rightAnswerIndex) {
        this.question = question;
        this.rArray = optionsArray;
        this.rightAnswerIndex = rightAnswerIndex;
    }

    correctAnswer(givenAnsIndex) {
        return this.rightAnswerIndex === givenAnsIndex
    }
}

const questionArray = [];

function addQuestion(question, optionArray, rightAnswerIndex) {
    let tempQuestion = new Question(question, optionArray, rightAnswerIndex);
    questionArray.push(tempQuestion);
}

(function combinedFunction() {
    addQuestion("Which country's territorial claims have sparked tensions in the South China Sea region?", ["Japan", "Vietnam", "Indonesia", "China"], 3)
    addQuestion("Which country is often referred to as the 'Hermit Kingdom'?", ["Japan", "North Korea", "Vietnam", "China"], 1)
    addQuestion("What is the capital city of Russia?", ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg"], 0)
    addQuestion("Which country has been at the center of the ongoing conflict in the Middle East for decades?", ["Iraq", "Iran", "Saudi Arabia", "Israel"], 3)
    addQuestion("Which European country was formerly divided by the Berlin Wall?", ["France", "Germany", "Italy", "Poland"], 1)
    addQuestion("What is the official language of Brazil?", ["Spanish", "Portuguese", "English", "French"], 1)
    addQuestion("Which African country was colonized by France and gained independence in 1960?", ["Nigeria", "Kenya", "Algeria", "Senegal"], 2)
    addQuestion("Which country is known as the 'Land of the Rising Sun'?", ["Japan", "China", "South Korea", "Taiwan"], 0)
    addQuestion("What is the largest country by land area in the world?", ["United States", "China", "Canada", "Russia"], 3)
    addQuestion("Which country is located on the Iberian Peninsula?", ["France", "Italy", "Spain", "Portugal"], 2)
    addQuestion("Which South American country shares a border with the United States?", ["Brazil", "Mexico", "Argentina", "Colombia"], 1)
    addQuestion("Which country is known as the 'Emerald Isle'?", ["England", "Scotland", "Ireland", "Wales"], 2)
    addQuestion("What is the capital city of Australia?", ["Sydney", "Melbourne", "Canberra", "Brisbane"], 2)
    addQuestion("Which country is the largest producer of oil in the world?", ["United States", "Russia", "Saudi Arabia", "China"], 2)
    addQuestion("Which Asian country is known for its 'Forbidden City'?", ["Japan", "China", "South Korea", "Vietnam"], 1)
    addQuestion("What is the official language of Argentina?", ["Spanish", "Portuguese", "Italian", "French"], 0)
    addQuestion("Which country is often referred to as the 'Giant of Africa'?", ["Nigeria", "South Africa", "Egypt", "Ethiopia"], 0)
    addQuestion("Which European country is famous for its tulips and windmills?", ["Netherlands", "Belgium", "Denmark", "Sweden"], 0)
    addQuestion("Which country is known as the 'Land of a Thousand Lakes'?", ["Finland", "Norway", "Sweden", "Iceland"], 0)
    addQuestion("What is the capital city of South Korea?", ["Seoul", "Busan", "Incheon", "Daegu"], 0)
    addQuestion("Which country is located on the Scandinavian Peninsula?", ["Denmark", "Finland", "Norway", "Iceland"], 2)
    addQuestion("Which African country is famous for its pyramids?", ["Sudan", "Egypt", "Nigeria", "Ethiopia"], 1)
    addQuestion("What is the official language of India?", ["Hindi", "English", "Urdu", "Bengali"], 0)
    addQuestion("Which country is known as the 'Land of Fire and Ice'?", ["Norway", "Greenland", "Iceland", "Finland"], 2)
    addQuestion("What is the capital city of Canada?", ["Toronto", "Montreal", "Ottawa", "Vancouver"], 2)
    addQuestion("Which country is located in both Asia and Europe?", ["Turkey", "Iran", "Iraq", "Syria"], 0)
    addQuestion("Which Caribbean country shares an island with Haiti?", ["Cuba", "Jamaica", "Dominican Republic", "Trinidad and Tobago"], 2)
    addQuestion("What is the official language of Pakistan?", ["English", "Urdu", "Punjabi", "Pashto"], 1)
    addQuestion("Which country is known for its fjords?", ["Denmark", "Norway", "Sweden", "Iceland"], 1)
    addQuestion("What is the capital city of Argentina?", ["Buenos Aires", "Santiago", "Lima", "Bogotá"], 0)
    addQuestion("Which country is known as the 'Land Down Under'?", ["United States", "New Zealand", "Australia", "South Africa"], 2)
    addQuestion("What is the capital city of Turkey?", ["Istanbul", "Ankara", "Izmir", "Antalya"], 1)
    addQuestion("Which country is located at the southern tip of Africa?", ["Nigeria", "South Africa", "Kenya", "Ghana"], 1)
    addQuestion("Which European country is known for its famous cuisine including pasta and pizza?", ["Spain", "France", "Italy", "Greece"], 2)
    addQuestion("What is the official language of Switzerland?", ["German", "French", "Italian", "Swiss German"], 0)
    addQuestion("Which country is the largest island in the world?", ["Greenland", "Australia", "Madagascar", "Iceland"], 0)
    addQuestion("Which country is known as the 'Land of the Pharaohs'?", ["Greece", "Turkey", "Egypt", "Israel"], 2)
    addQuestion("What is the capital city of Thailand?", ["Bangkok", "Phuket", "Chiang Mai", "Pattaya"], 0)
    addQuestion("Which country is often referred to as the 'Crossroads of Europe'?", ["Belgium", "Netherlands", "Luxembourg", "Switzerland"], 3)
    addQuestion("Which South American country is known for the Amazon Rainforest?", ["Brazil", "Argentina", "Chile", "Peru"], 0)
    addQuestion("What is the official language of Mexico?", ["Spanish", "Portuguese", "English", "French"], 0)
    addQuestion("Which country is known as the 'Land of Smiles'?", ["Thailand", "Vietnam", "Cambodia", "Laos"], 0)
    addQuestion("Which European country is famous for its historical sites including the Acropolis?", ["Italy", "Greece", "Spain", "Turkey"], 1)
    addQuestion("What is the capital city of Saudi Arabia?", ["Riyadh", "Jeddah", "Mecca", "Medina"], 0)
    addQuestion("Which country is known for its iconic Mount Everest?", ["China", "India", "Nepal", "Bhutan"], 2)
    addQuestion("What is the official language of Canada?", ["English", "French", "Spanish", "German"], 0)
    addQuestion("Which African country is known for its diverse wildlife and safaris?", ["Kenya", "Nigeria", "Tanzania", "South Africa"], 2)
    addQuestion("Which country is located on the island of Hispaniola?", ["Cuba", "Jamaica", "Dominican Republic", "Haiti"], 2)
    addQuestion("What is the capital city of Spain?", ["Barcelona", "Madrid", "Valencia", "Seville"], 1)
    addQuestion("Which country is known as the 'Land of the Rising Sun'?", ["Japan", "China", "South Korea", "Vietnam"], 0)
    addQuestion("Which Caribbean country was colonized by the British and gained independence in 1962?", ["Cuba", "Jamaica", "Haiti", "Trinidad and Tobago"], 1)
    addQuestion("What is the official language of Germany?", ["German", "English", "French", "Italian"], 0)
    addQuestion("Which country is known as the 'Pearl of the Indian Ocean'?", ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"], 1)
    addQuestion("What is the capital city of Egypt?", ["Alexandria", "Luxor", "Giza", "Cairo"], 3)
    addQuestion("Which Central American country is known for its canal connecting the Atlantic and Pacific Oceans?", ["Costa Rica", "Belize", "Panama", "Guatemala"], 2)
    addQuestion("Which country is known as the 'Land of Fire'?", ["Argentina", "Chile", "Brazil", "Uruguay"], 1)
    addQuestion("What is the capital city of France?", ["Paris", "Marseille", "Lyon", "Nice"], 0)
    addQuestion("Which country is known for its ancient ruins including Machu Picchu?", ["Brazil", "Argentina", "Chile", "Peru"], 3)
    addQuestion("What is the official language of South Africa?", ["English", "Afrikaans", "Zulu", "Xhosa"], 0)
    addQuestion("Which country is located on the island of Borneo?", ["Malaysia", "Indonesia", "Philippines", "Singapore"], 0)
    addQuestion("Which country is known as the 'Land of the Midnight Sun'?", ["Sweden", "Norway", "Finland", "Denmark"], 1)
    addQuestion("What is the capital city of South Africa?", ["Cape Town", "Pretoria", "Durban", "Johannesburg"], 1)
    addQuestion("Which country is the smallest by land area in the world?", ["Monaco", "Maldives", "Nauru", "Vatican City"], 3)
    addQuestion("Which European country is known for its high-speed trains, the TGV?", ["Germany", "Italy", "France", "Spain"], 2)
    addQuestion("What is the official language of Iran?", ["Arabic", "Farsi", "Turkish", "Kurdish"], 1)
    addQuestion("Which country is known for its famous carnival celebration in Rio de Janeiro?", ["Brazil", "Argentina", "Colombia", "Venezuela"], 0)
    addQuestion("Which Southeast Asian country is made up of thousands of islands?", ["Vietnam", "Thailand", "Indonesia", "Philippines"], 2)
    addQuestion("What is the capital city of Kenya?", ["Nairobi", "Mombasa", "Kisumu", "Eldoret"], 0)
    addQuestion("Which country is known as the 'Land of a Thousand Hills'?", ["Kenya", "Rwanda", "Uganda", "Tanzania"], 1)
    addQuestion("Which country is located on the Horn of Africa?", ["Somalia", "Ethiopia", "Eritrea", "Djibouti"], 0)
    addQuestion("What is the official language of Belgium?", ["French", "Dutch", "German", "Flemish"], 1)
    addQuestion("Which country is known for its iconic kangaroos and koalas?", ["Australia", "New Zealand", "Fiji", "Papua New Guinea"], 0)
    addQuestion("What is the capital city of Peru?", ["Lima", "Cusco", "Arequipa", "Trujillo"], 0)
    addQuestion("Which country is known for its famous Oktoberfest celebration?", ["Germany", "Austria", "Switzerland", "Netherlands"], 0)
    addQuestion("Which Central Asian country was once part of the Soviet Union?", ["Afghanistan", "Pakistan", "Kazakhstan", "Uzbekistan"], 2)
    addQuestion("What is the official language of Japan?", ["Japanese", "Chinese", "Korean", "Thai"], 0)
    addQuestion("Which country is known as the 'Land of Lakes'?", ["Canada", "United States", "Russia", "Sweden"], 3)
    addQuestion("What is the capital city of Bangladesh?", ["Dhaka", "Chittagong", "Khulna", "Rajshahi"], 0)
    addQuestion("Which country is known for its famous Angkor Wat temple complex?", ["Vietnam", "Cambodia", "Thailand", "Laos"], 1)
    addQuestion("Which Caribbean country shares an island with the Netherlands?", ["Haiti", "Jamaica", "Dominican Republic", "Aruba"], 3)
    addQuestion("What is the official language of Austria?", ["German", "English", "Dutch", "Hungarian"], 0)
    addQuestion("Which country is known for its beautiful fjords and Viking history?", ["Sweden", "Finland", "Norway", "Denmark"], 2)
    addQuestion("What is the capital city of Colombia?", ["Bogotá", "Medellín", "Cali", "Barranquilla"], 0)
    addQuestion("Which country is known as the 'Land of the Thunder Dragon'?", ["Nepal", "Bhutan", "Tibet", "Mongolia"], 1)
    addQuestion("Which country is known for its famous Great Wall?", ["Japan", "China", "South Korea", "Vietnam"], 1)
    addQuestion("What is the official language of the Philippines?", ["Filipino", "English", "Tagalog", "Spanish"], 0)
    addQuestion("Which European country is known for its unique wooden shoe footwear called clogs?", ["Germany", "Belgium", "Netherlands", "Denmark"], 2)
    addQuestion("Which country is known as the 'Cradle of Civilization'?", ["Greece", "Egypt", "Iraq", "Iran"], 2)
    addQuestion("What is the capital city of Switzerland?", ["Geneva", "Zurich", "Bern", "Basel"], 2)
    addQuestion("Which country is known for its famous Inca ruins, including Machu Picchu?", ["Argentina", "Chile", "Peru", "Bolivia"], 2)
})();

class Methods {
    constructor() {
        this.currentQuestionNo = 0;
        this.randomtenArray = [];
        this.shuffleQuestion();
        this.point = 0;
        this.rightAnswerCount = 0;
        this.pendingQuestion = 10;
        this.givenAnswer = undefined;
        this.isCAnswerTrue = null;
    }

    get cQuestion() {
        return this.randomtenArray[this.currentQuestionNo].question;
    }

    get cop1() {
        return this.randomtenArray[this.currentQuestionNo].rArray[0];
    }

    get cop2() {
        return this.randomtenArray[this.currentQuestionNo].rArray[1];
    }

    get cop3() {
        return this.randomtenArray[this.currentQuestionNo].rArray[2];
    }

    get cop4() {
        return this.randomtenArray[this.currentQuestionNo].rArray[3];
    }

    get cAnsIndex () {
        return this.randomtenArray[this.currentQuestionNo].rightAnswerIndex;
    }

    get rAns() {
        return this.randomtenArray[this.currentQuestionNo].rightAnswerIndex;
    }

    shuffleQuestion() {
        for (let i = questionArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questionArray[i], questionArray[j]] = [questionArray[j], questionArray[i]];
        }

        this.randomtenArray = questionArray.slice(0, 10);
    }

    checkAns(ans) {
        return (this.randomtenArray[this.currentQuestionNo].rightAnswerIndex === ans);
    }

    nextQuestion() {
        this.currentQuestionNo += 1;
    }
}

let user = new Methods();

// Selecting HTML elements by their IDs
const landingPage = document.getElementById('page-landing');
const startButton = document.getElementById('button-Start');
const questionPage = document.getElementById('page-Question');
const questionNumber = document.getElementById('questionNo');
const correctAnswerCount = document.getElementById('correctAnsCount');
const totalPoints = document.getElementById('totalPoints');
const questionText = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const submitButton = document.getElementById('Submit_button');
const nextButton = document.getElementById('Next_button');
const endPage = document.getElementById('page-End');
const finalScore = document.getElementById('finalScore');
const finalCorrectAns = document.getElementById('finalCorrectAns');
const restartPage = document.getElementById('restart')

function refreshPage() {
    questionNumber.innerText = (user.currentQuestionNo) + 1;
    correctAnswerCount.innerText = user.rightAnswerCount;
    totalPoints.innerText = user.point;
    questionText.innerText = user.cQuestion;
    option1.innerText = user.cop1;
    option2.innerText = user.cop2;
    option3.innerText = user.cop3;
    option4.innerText = user.cop4;
}

function buttonClick (num) {
    if (num === 1){
        option1.classList.remove("bg-blue-500");
        option3.classList.remove("bg-orange-300");
        option2.classList.remove("bg-orange-300");
        option4.classList.remove("bg-orange-300");
        option1.classList.add("bg-orange-300");
        option2.classList.add("bg-blue-500");
        option3.classList.add("bg-blue-500");
        option4.classList.add("bg-blue-500");
        user.givenAnswer = 0;
        user.isCAnswerTrue = user.checkAns(0);
    } else if (num === 2) {
        option2.classList.remove("bg-blue-500");
        option3.classList.remove("bg-orange-300");
        option4.classList.remove("bg-orange-300");
        option1.classList.remove("bg-orange-300");
        option2.classList.add("bg-orange-300");
        option1.classList.add("bg-blue-500");
        option3.classList.add("bg-blue-500");
        option4.classList.add("bg-blue-500");
        user.isCAnswerTrue = user.checkAns(1);
        user.givenAnswer = 1;
    } else if (num === 3){
        option3.classList.remove("bg-blue-500");
        option4.classList.remove("bg-orange-300");
        option2.classList.remove("bg-orange-300");
        option1.classList.remove("bg-orange-300");
        option3.classList.add("bg-orange-300");
        option2.classList.add("bg-blue-500");
        option1.classList.add("bg-blue-500");
        option4.classList.add("bg-blue-500");
        user.givenAnswer = 2;
        user.isCAnswerTrue = user.checkAns(2);
    } else if (num === 4) {
        option4.classList.remove("bg-blue-500");
        option3.classList.remove("bg-orange-300");
        option2.classList.remove("bg-orange-300");
        option1.classList.remove("bg-orange-300");
        option4.classList.add("bg-orange-300");
        option2.classList.add("bg-blue-500");
        option3.classList.add("bg-blue-500");
        option1.classList.add("bg-blue-500");
        user.givenAnswer = 3;
        user.isCAnswerTrue = user.checkAns(3);
    }
}

function submit () {
    if (user.givenAnswer !== undefined) {
        submitButton.classList.remove("flex");
        submitButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
        nextButton.classList.add("flex");
        option1.classList.add("pointer-events-none");
        option2.classList.add("pointer-events-none");
        option3.classList.add("pointer-events-none");
        option4.classList.add("pointer-events-none");
    }

    if (user.cAnsIndex === 0) {
        option1.classList.add("ring-4","ring-green-500","ring-inset");
        option2.classList.add("ring-4","ring-red-500","ring-inset");
        option3.classList.add("ring-4","ring-red-500","ring-inset");
        option4.classList.add("ring-4","ring-red-500","ring-inset");
    } else if (user.cAnsIndex === 1) {
        option2.classList.add("ring-4","ring-green-500","ring-inset");
        option1.classList.add("ring-4","ring-red-500","ring-inset");
        option3.classList.add("ring-4","ring-red-500","ring-inset");
        option4.classList.add("ring-4","ring-red-500","ring-inset");
    } else if (user.cAnsIndex === 2) {
        option3.classList.add("ring-4","ring-green-500","ring-inset");
        option1.classList.add("ring-4","ring-red-500","ring-inset");
        option2.classList.add("ring-4","ring-red-500","ring-inset");
        option4.classList.add("ring-4","ring-red-500","ring-inset");
    } else if (user.cAnsIndex === 3) {
        option4.classList.add("ring-4","ring-green-500","ring-inset");
        option1.classList.add("ring-4","ring-red-500","ring-inset");
        option3.classList.add("ring-4","ring-red-500","ring-inset");
        option2.classList.add("ring-4","ring-red-500","ring-inset");
    }

    if (user.isCAnswerTrue) {
        user.point += 5;
        user.rightAnswerCount += 1;
    }

    refreshPage();
}

function nextQuestion () {
    user.currentQuestionNo += 1;
    user.givenAnswer = undefined;
    user.isCAnswerTrue = null;
    option1.classList.remove("ring-4","ring-green-500","ring-inset","ring-red-500");
    option2.classList.remove("ring-4","ring-green-500","ring-inset","ring-red-500");
    option3.classList.remove("ring-4","ring-green-500","ring-inset","ring-red-500");
    option4.classList.remove("ring-4","ring-green-500","ring-inset","ring-red-500");
    option1.classList.remove("pointer-events-none");
    option2.classList.remove("pointer-events-none");
    option3.classList.remove("pointer-events-none");
    option4.classList.remove("pointer-events-none");
    submitButton.classList.add("flex");
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    nextButton.classList.remove("flex");
    option1.classList.remove("bg-orange-300");
    option2.classList.remove("bg-orange-300");
    option3.classList.remove("bg-orange-300");
    option4.classList.remove("bg-orange-300");
    option1.classList.add("bg-blue-500");
    option2.classList.add("bg-blue-500");
    option3.classList.add("bg-blue-500");
    option4.classList.add("bg-blue-500");
    if (user.currentQuestionNo < 10) {
        refreshPage();
    } else {
        questionPage.classList.remove("flex");
        questionPage.classList.add("hidden");
        endPage.classList.remove("hidden");
        endPage.classList.add("flex");
        finalScore.innerText = user.point;
        finalCorrectAns.innerText = user.rightAnswerCount;
    }
}

function restartQuiz() {
    questionPage.classList.add("flex");
    questionPage.classList.remove("hidden");
    endPage.classList.add("hidden");
    endPage.classList.remove("flex");
    user.currentQuestionNo = 0;
    user.point = 0;
    user.rightAnswerCount = 0;
    user.pendingQuestion = 10;
    user.givenAnswer = undefined;
    user.isCAnswerTrue = null;
    user.shuffleQuestion();
    refreshPage();
}

startButton.addEventListener("click", () => {
    landingPage.classList.remove("flex");
    landingPage.classList.add("hidden");
    questionPage.classList.remove("hidden");
    questionPage.classList.add("flex");
    refreshPage();
})

option1.addEventListener("click", () => {
    buttonClick(1)
})
option2.addEventListener("click", () => {
    buttonClick(2)
})
option3.addEventListener("click", () => {
    buttonClick(3)
})
option4.addEventListener("click", () => {
    buttonClick(4)
})

submitButton.addEventListener("click", () => {
    submit ()
})

nextButton.addEventListener("click",() => {
    nextQuestion()
})

restartPage.addEventListener("click",() => {
    restartQuiz()
})