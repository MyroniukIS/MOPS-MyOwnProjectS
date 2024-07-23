const projectModalGuessMyNumber = document.querySelector(
  "#personal-project-guess_my_number"
);
const projectModalPigGame = document.querySelector(
  "#personal-project-pig-game"
);
const projectModaProTest = document.querySelector("#personal-project-pro-test");
const projectModalProjectGoit = document.querySelector(
  "#personal-project-goit"
);

const projectModalQuestify = document.querySelector("#team-project-questify");
const projectModalItTest = document.querySelector("#team-project-it-test");

const projectOpenBtnGuessMyNumber = document.querySelector(
  "#personal-project-guess_my_number-btn"
);
const projectOpenBtnPigGame = document.querySelector(
  "#personal-project-pig-game-btn"
);
const projectOpenBtnProTest = document.querySelector(
  "#personal-project-pro-test-btn"
);
const projectOpenBtnProjectGoit = document.querySelector(
  "#personal-project-goit-btn"
);

const projectOpenBtnQuestify = document.querySelector(
  "#team-project-questify-btn"
);
const projectOpenBtnItTest = document.querySelector(
  "#team-project-it-test-btn"
);

const projectModals = [
  projectModalGuessMyNumber,
  projectModalPigGame,
  projectModaProTest,
  projectModalProjectGoit,
  projectModalQuestify,
  projectModalItTest,
];
const projectBtns = [
  projectOpenBtnGuessMyNumber,
  projectOpenBtnPigGame,
  projectOpenBtnProTest,
  projectOpenBtnProjectGoit,
  projectOpenBtnQuestify,
  projectOpenBtnItTest,
];

projectBtns.forEach((btn, index) => {
  const projectModal = projectModals[index];

  if (btn) {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      projectModal.classList.add(MODAL_ACTIVE_CLASS);

      document.body.classList.add(BODY_SCROLL_DISABLE_CLASS);
    });
  }
});
