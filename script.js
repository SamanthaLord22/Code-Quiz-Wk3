//Global variables
let timerEl = document.getElementById("timer");
let startbuttonEl = document.getElementById("startbutton")
let indexReference = 0
let questionSection = document.querySelector(".questionSection")
let newTextEl = document.querySelector(".newText")

//Array of objects for quiz
let questionArray = [{
    question: "What does the console log do?",
    choices: ["Saves data to the webpage console", "Sends function as an email", "Saves function to html", "Deletes your css color background"],
    answer: "Saves function to the webpage console",
}, {
    question: "An object includes:",
    choices: ["Properties", "jQuery", "If statement", "Console.log"],
    answer: "Properties",
}, {
    question: "DOM stands for:",
    choices: ["Dog On Moon", "Document Observe Model", "Document Object Moose", "Document Object Model"],
    answer: "Document Object Model",
}, {
    question: "A JavaScript string is:",
    choices: ["numbers only", "HTML elements only", "characters written inside qoutes", "names only"],
    answer: "characters written inside qoutes",
}]

//Timer starts upon start button and stops at 0
let countDown = 45
timerEl.textContent = countDown;
function setTimer() {
    if (countDown < 45) {
        return;
    };
    let timer = setInterval(function () {
        if (countDown === 0) {
            clearInterval(timer);
        };
        countDown = countDown - 1;
        timerEl.textContent = countDown;
    }, 1000);
};

//hide quiz until start button is pushed
function startQuiz() {
    setTimer()
    nextQuestion(indexReference)
};

//create html element and buttons for quiz
questionSection.addEventListener("click", function(event) {
    let answerChosen = event.target.textContent;
    console.log(questionArray[indexReference].answer)
    if (answerChosen === questionArray[indexReference].answer) {
           prompt('correct!')
       } else {
            countDown -= 3;
            timerEl.textContent = countDown;
        };
    indexReference++;
    nextQuestion(indexReference);
});

//go through questions in quiz
function nextQuestion(indexArray) {
    questionSection.innerHTML = ""
    let h1 = document.createElement("h1")
    h1.textContent = questionArray[indexArray].question;
    questionSection.append(h1);
    for (i = 0; i < questionArray[indexArray].choices.length; i++) {
        let button = document.createElement("button")
        button.setAttribute('class', 'options');
        button.textContent = questionArray[indexArray].choices[i];
        questionSection.append(button);
    };
    if (indexArray === 3) {
        score();
    };
};
//text form to enter initials
function score() {
    newTextEl = document.createElement("input");
    newTextEl.setAttribute("type", "text");
    newTextEl.setAttribute("value","Enter your Initials!");
    document.body.append(newTextEl);
    console.log(newTextEl)

};

//function to run timer and start
startbuttonEl.addEventListener("click", startQuiz);