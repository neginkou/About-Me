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

//Final message
const finalMessage = `Thank you for learning more about me, ${userName}. I hope you enjoyed the game!`;
alert(finalMessage);
