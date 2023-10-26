// Welcome user
const userName = prompt("Welcome! Please enter your name:");
const welcomeMessage = `Welcome to Negin's Life Journey, ${userName}! Let's get to know each other better.`;
alert(welcomeMessage);

// questions and correct answers
let questions = [
  "Am I originally from Iran? (Yes/No)",
  "Did I travel to Malaysia? (Yes/No)",
  "Do I have any pets? (Yes/No)",
  "Did I serve in the U.S. Army? (Yes/No)",
  "Am I transitioning to a career as a software developer? (Yes/No)",
];

let answers = ["Yes", "Yes", "No", "Yes", "Yes"];


function checkAnswer(userInput, correctAnswer) {
  return userInput.toLowerCase() === correctAnswer.toLowerCase();
}

for (let i = 0; i < questions.length; i++) {
  const userResponse = prompt(questions[i]);
  if (userResponse !== null) {
    if (checkAnswer(userResponse, answers[i])) {
      alert("Correct! You got it right.");
    } else {
      alert("Sorry, that's not correct.");
      break;
    }
  }
}
const correctAnswers = ["apple", "pamegranate", "sour cherry"];
let attempts2 = 6;
let guessedCorrectly2 = false;

while (attempts2 > 0) {
  const userAnswer = prompt("What is my favorite fruit, Enter your guess:");
  if (correctAnswers.includes(userAnswer.toLowerCase())) {
    alert("Correct! That's one of the answers.");
    guessedCorrectly2 = true;
    break;
  } else {
    alert("Incorrect. Try again.");
  }
  attempts2--;
}
if (!guessedCorrectly2) {
  alert("You've run out of attempts. The correct answers are: " + correctAnswers.join(", "));
}

const myAge = 32;
let attempts = 4;
let isCorrect = false;

while (attempts > 0) {
  const userGuess = parseInt(prompt(`Guess my age. You have ${attempts} attempts left:`));

  if (isNaN(userGuess)) {
    alert("Please enter a valid number.");
  } else if (userGuess < myAge) {
    alert("Too low! Try again.");
    attempts--;
  } else if (userGuess > myAge) {
    alert("Too high! Try again.");
    attempts--;
  } else {
    isCorrect = true;
    break;
  }
}

if (isCorrect) {
  alert(`Congratulations! You guessed my age correctly, which is ${myAge}.`);
} else {
  alert(`Sorry, you've used up all your attempts. My age is ${myAge}.`);
}
let correctCount = 0;
for (let i = 0; i < questions.length; i++) {
  const userAnswer = prompt(questions[i]);

  if (userAnswer !== null && userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
    correctCount++;
  }
}
alert(`You got ${correctCount} out of 7 questions correct!`);

//Final message
const finalMessage = `Thank you for learning more about me, ${userName}. I hope you enjoyed the game!`;
alert(finalMessage);
