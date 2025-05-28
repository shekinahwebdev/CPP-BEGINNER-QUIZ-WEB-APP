// Complete working quiz app logic
document.addEventListener("DOMContentLoaded", () => {
  const welcomePage = document.querySelector(".welcome-section");
  const questionContainer = document.querySelector(".popup-container");
  const resultContainer = document.querySelector(".result-popup");
  const progressBar = document.querySelector(".progress-bar");
  const startQuizBtn = document.querySelector(".start-quiz-btn");
  const nextBtn = document.querySelector(".next");
  const previousBtn = document.querySelector(".previous");
  const retakeQuizBtn = document.querySelector(".retake-quiz-btn");
  const timerDisplay = document.querySelector(".timer");
  const questionCountText = document.querySelector(".question-count");
  const questionCounter = document.querySelector(".question-counter");
  const scoreText = document.querySelector(".score-counts");
  const questionText = document.querySelector(".question-text");
  const codeBlock = document.querySelector("pre.code-block code");
  const answerOptions = document.querySelector(".answer-options");
  const marksText = document.querySelector(".marks");
  const correctScores = document.querySelector(".correct-scores");
  const incorrectScores = document.querySelector(".incorrect-scores");
  const totalTimeText = document.querySelector(".total-time");

  let currentQuestionIndex = 0;
  let score = 0;
  let timeElapsed = 0;
  let currentQuestion = null;
  let timerInterval;
  const questionsIndexHistory = [];
  const totalQuestions = quizQuestions.length;
  const userAnswers = [];

  function startTimer() {
    timerInterval = setInterval(() => {
      timeElapsed++;
      const minutes = Math.floor(timeElapsed / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (timeElapsed % 60).toString().padStart(2, "0");
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerInterval);
  }

  function showResult() {
    clearInterval(timerInterval);

    questionContainer.style.display = "none";
    resultContainer.style.display = "flex";

    const finalScore = score;
    const total = totalQuestions;
    const correct = score;
    const incorrect = total - correct;

    marksText.textContent = `${finalScore}/${totalQuestions}`;
    correctScores.textContent = `${correct}`;
    incorrectScores.textContent = `${incorrect}`;

    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    totalTimeText.textContent = `${formattedMinutes}:${formattedSeconds}`;

    const responseText = document.querySelector(".response");
    if (score >= 18) {
      responseText.textContent =
        "🎉 Great job! You nailed it with most answers correct!";
    } else if (score >= 10) {
      responseText.textContent =
        "👍 Good effort! Keep practicing to get even better.";
    } else {
      responseText.textContent =
        "📘 Don't worry, keep learning and you'll improve!";
    }
  }

  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function handleQuiz() {
    welcomePage.style.display = "none";
    questionContainer.style.display = "block";

    currentQuestionIndex = 0;
    score = 0;
    timeElapsed = 0;
    questionsIndexHistory.length = 0;
    scoreText.textContent = "0";
    totalTimeText.textContent = "0s";

    loadQuestion();
    startTimer();
    updateProgressBar();
  }

  function handleRetakeQuiz() {
    clearInterval(timerInterval);

    currentQuestionIndex = 0;
    score = 0;
    timeElapsed = 0;
    questionsIndexHistory.length = 0;
    userAnswers.length = 0;

    resultContainer.style.display = "none";
    welcomePage.style.display = "flex";
    scoreText.textContent = "0";
    totalTimeText.textContent = "0s";
    timerDisplay.textContent = "00:00";

    answerOptions.innerHTML = "";

    handleQuiz();
  }

  function loadQuestion() {
    let question;

    if (questionsIndexHistory[currentQuestionIndex] !== undefined) {
      question = quizQuestions[questionsIndexHistory[currentQuestionIndex]];
    } else {
      const availableQuestions = quizQuestions.filter(
        (_, index) => !questionsIndexHistory.includes(index)
      );
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      question = availableQuestions[randomIndex];
      const actualIndex = quizQuestions.indexOf(question);
      questionsIndexHistory[currentQuestionIndex] = actualIndex;
    }

    currentQuestion = question;
    questionText.textContent = currentQuestion.question;
    questionCountText.innerHTML = `Question <b>${
      currentQuestionIndex + 1
    }</b> of ${totalQuestions}`;

    if (currentQuestion.code && currentQuestion.code.trim() !== "") {
      codeBlock.style.display = "flex";
      codeBlock.textContent = currentQuestion.code;
    } else {
      codeBlock.style.display = "none";
      codeBlock.textContent = "";
    }

    answerOptions.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.classList.add("answer-option");
      li.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
      li.addEventListener("click", () => handleAnswerClick(li, index));
      answerOptions.appendChild(li);

      const savedAnswer = userAnswers[currentQuestionIndex];
      const correctIndex = currentQuestion.answer;

      if (savedAnswer !== undefined) {
        li.classList.add("disabled");

        if (index === correctIndex) {
          li.classList.add("correct");
        }

        if (index === savedAnswer) {
          if (savedAnswer !== correctIndex) {
            li.classList.add("wrong");
          }
          li.classList.add("active-option");
        }
      }
    });
  }

  function handleAnswerClick(selectedOption, answerIndex) {
    if (selectedOption.classList.contains("disabled")) return;

    const correctAnswerIndex = currentQuestion.answer;
    const allOptions = answerOptions.querySelectorAll("li");

    allOptions.forEach((option, idx) => {
      option.classList.add("disabled");
      option.classList.remove("active-option");
      if (idx === correctAnswerIndex) {
        option.classList.add("correct");
      } else if (idx === answerIndex) {
        option.classList.add("wrong");
      }
    });

    selectedOption.classList.add("active-option");

    if (answerIndex === correctAnswerIndex) {
      score++;
      scoreText.textContent = `${score}`;
    }

    userAnswers[currentQuestionIndex] = answerIndex;
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++;
      loadQuestion();
      updateProgressBar();
    } else {
      stopTimer();
      showResult();
    }
  }

  function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      loadQuestion();
      updateProgressBar();
    }
  }

  retakeQuizBtn.addEventListener("click", handleRetakeQuiz);
  startQuizBtn.addEventListener("click", handleQuiz);
  nextBtn.addEventListener("click", handleNextQuestion);
  previousBtn.addEventListener("click", handlePrevQuestion);
});
