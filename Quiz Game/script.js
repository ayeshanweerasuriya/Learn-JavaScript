const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.textContent = currentQuiz.question;

  optionsContainer.innerHTML = "";
  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });

  scoreElement.textContent = `Score: ${score}`;
}

function checkAnswer(selectedAnswer) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedAnswer === currentQuiz.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = "Quiz completed!";
  optionsContainer.innerHTML = "";
  nextButton.style.display = "none";
  scoreElement.textContent = `Final Score: ${score} out of ${quizData.length}`;
}

loadQuestion();

nextButton.addEventListener("click", () => {
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
});
