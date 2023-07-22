const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "Berlin", "London", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest mammal?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Which planet is closest to the Sun?",
        choices: ["Venus", "Mars", "Mercury", "Earth"],
        correctAnswer: "Mercury"
    }
];
// qs using array

let currentQuestion = 0;
// track of the current question's index in the quizData array.
let score = 0;
// Stores the user's score.

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;

    choicesElement.innerHTML = "";
    currentQuiz.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(choice) {
    const currentQuiz = quizData[currentQuestion];
    if (choice === currentQuiz.correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    choicesElement.innerHTML = "";
    questionElement.textContent = `You scored ${score} out of ${quizData.length} questions.`;
    submitButton.style.display = "none";
}

loadQuestion();
submitButton.addEventListener("click", () => checkAnswer());
