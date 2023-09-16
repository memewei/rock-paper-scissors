window.onload = beginAnimation();
let playerScore = 0;
let computerScore = 0;
let playerInput;
let computerSelection;
const array = ["Rock", "Paper", "Scissors"];
const main = document.querySelector("main");
const span = document.querySelectorAll("span");
const desc = document.querySelector(".desc");
let buttons = document.querySelectorAll(".button");
const container = document.querySelector("#results-container");
const endPage = document.querySelector("#end-page");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retrial-btn");

function beginAnimation() {
  fadeIn();
  const desc1 = document.querySelector("#desc1");
  let desc1Span = desc1.querySelectorAll("span");

  desc1Span = Array.from(desc1Span);

  const desc2 = document.querySelector("#desc2");
  const desc3 = document.querySelector("#desc3");
  const desc4 = document.querySelector("#desc4");

  desc1Span[desc1Span.length - 1].ontransitionend = () => {
    desc1.classList.add("fade-out");

    desc1.addEventListener("animationend", () => {
      desc1.classList.add("disappear");
      desc1.classList.remove("animate");
      desc2.classList.add("animate");
      desc2.classList.remove("disappear");
      fadeIn();

      let desc2Span = desc2.querySelectorAll("span");
      desc2Span = Array.from(desc2Span);

      desc2Span[desc2Span.length - 1].ontransitionend = () => {
        desc2.classList.add("fade-out");
        desc2.addEventListener("animationend", () => {
          desc2.classList.add("disappear");
          desc2.classList.remove("animate");
          desc3.classList.add("animate");
          desc3.classList.remove("disappear");
          fadeIn();

          let desc3Span = desc3.querySelectorAll("span");
          desc3Span = Array.from(desc3Span);

          desc3Span[desc3Span.length - 1].ontransitionend = () => {
            desc3.classList.add("fade-out");
            desc3.addEventListener("animationend", () => {
              desc3.classList.add("disappear");
              desc3.classList.remove("animate");
              desc4.classList.add("animate");
              desc4.classList.remove("disappear");
              fadeIn();

              let desc4Span = desc4.querySelectorAll("span");
              desc4Span = Array.from(desc4Span);

              desc4Span[desc4Span.length - 1].ontransitionend = () => {
                const cta = document.querySelector("#cta");

                cta.classList.add("dropdown");

                cta.addEventListener("animationend", () => {
                  const gameContainer =
                    document.querySelector("#game-container");

                  setTimeout(function () {
                    gameContainer.classList.add("fade-in");
                  }, 300);
                });
              };
            });
          };
        });
      };
    });
  };
}

function getComputerChoice() {
  return array[~~(Math.random() * array.length)];
}

function playRound(playerInput, computerSelection) {
  computerSelection = getComputerChoice().toLowerCase();
  playerInput = playerInput.toLowerCase();
  if (
    (playerInput == "rock" && computerSelection == "paper") ||
    (playerInput == "scissors" && computerSelection == "rock") ||
    (playerInput == "paper" && computerSelection == "scissors")
  ) {
    computerScore = ++computerScore;
    keepComputerPoints();
    displayResults(
      `You lost to the computer! You chose ${playerInput} while the computer chose ${computerSelection}`,
    );
  } else if (
    (playerInput === "rock" && computerSelection == "scissors") ||
    (playerInput == "scissors" && computerSelection == "paper") ||
    (playerInput == "paper" && computerSelection == "rock")
  ) {
    playerScore = ++playerScore;
    keepPlayerPoints();
    displayResults(
      `You won against the computer! You chose ${playerInput} while the computer chose ${computerSelection}`,
    );
  } else {
    displayResults(`It was a tie! Both of you chose ${playerInput}`);
  }
}

function fadeIn() {
  const text = document.querySelector(".animate");

  let strText = text.textContent;
  let splitText = strText.split("");
  text.textContent = "";

  for (i = 0; i < splitText.length; i++) {
    text.innerHTML += `<span>${splitText[i]}</span>`;
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;

    if (char === splitText.length) {
      complete();
      return;
    }
  }
  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

function displayResults(str) {
  container.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });
  container.textContent = str;
}

function keepPlayerPoints() {
  const playerPointBox = document.querySelector("#player-points");

  playerPointBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  playerPointBox.textContent = playerScore;
}

function keepComputerPoints() {
  const computerPointBox = document.querySelector("#computer-points");

  computerPointBox.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
    easing: "ease-out",
  });

  computerPointBox.textContent = computerScore;
}

function endGame() {
  main.classList.add("disappear");
  desc.classList.remove("animate");
  endPage.classList.remove("disappear");
  endDesc.classList.add("animate");

  returnMainBtn.addEventListener("click", () => {
    main.classList.remove("disappear");
    endPage.classList.add("disappear");
    desc.classList.add("animate");
    returnMainBtn.classList.remove("fade-in");
    restartGame();
  });
}

function restartGame() {
  beginAnimation();
  container.textContent = "";
  playerScore = 0;
  computerScore = 0;
  keepPlayerPoints();
  keepComputerPoints();
}

function declareWinner() {
  endGame();
  if (playerScore > computerScore) {
    endDesc.textContent =
      "You won! The judge shall let you go now... You are welcome to visit him and play anytime!";
    returnMainBtn.innerText = "Play again!";
  } else {
    endDesc.textContent =
      "Uh oh... you lost! Do you want to request for a retrial?";
    returnMainBtn.innerText = "Retrial!";
  }
  fadeIn();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerInput = img.alt.toLowerCase();

    playRound(playerInput, computerSelection);

    if (playerScore === 5 || computerScore === 5) {
      declareWinner();
    }
  });
});
