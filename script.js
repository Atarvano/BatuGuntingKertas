let playerScore = 0;
let computerScore = 0;

function Play(pilihanplayer) {
  const choices = ["batu", "gunting", "kertas"];
  const Plihancomputer = choices[Math.floor(Math.random() * choices.length)];
  console.log(Plihancomputer);
  const result = determineWinner(pilihanplayer, Plihancomputer);
  updateScores(result);
  displayResult(pilihanplayer, Plihancomputer, result);
}

console.log(Play(""));

function determineWinner(pilihanplayer, Plihancomputer) {
  if (pilihanplayer === Plihancomputer) {
    return "DRAW";
  } else if (
    (pilihanplayer === "batu" && Plihancomputer === "gunting") ||
    (pilihanplayer === "gunting" && Plihancomputer === "kertas") ||
    (pilihanplayer === "kertas" && Plihancomputer === "batu")
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}

function updateScores(result) {
  if (result === "PLAYER") {
    playerScore++;
    document.getElementById("playerScore").textContent = playerScore;
  } else if (result === "COMPUTER") {
    computerScore++;
    document.getElementById("computerScore").textContent = computerScore;
  }
}

function displayResult(pilihanplayer, Plihancomputer, result) {
  const playerChoiceImage = document.getElementById("playerChoiceImage");
  const computerChoiceImage = document.getElementById("computerChoiceImage");
  const resultText = document.getElementById("result");

  // Set image sources based on choices
  playerChoiceImage.src = `${pilihanplayer}.png`;
  computerChoiceImage.src = `${Plihancomputer}.png`;

  // Display result text
  resultText.textContent = `Result: ${
    result === "DRAW"
      ? "It's a draw!"
      : result === "PLAYER"
      ? "You win!"
      : "Computer wins!"
  }`;
}
