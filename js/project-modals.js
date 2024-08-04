//Personal modal container id-s
const projectModalGuessMyNumber = document.querySelector(
  "#personal-project-guess_my_number"
);
const projectModalPigGame = document.querySelector(
  "#personal-project-pig-game"
);
const projectModaWhatWhereWhen = document.querySelector(
  "#personal-project-what-where-when-about-it"
);
// -------------look here
const projectModalProjectGoit = document.querySelector(
  "#personal-project-goit"
);

//Team modal container id-s
const projectModalIceCream = document.querySelector("#team-project-ice-cream");
const projectModalFilmoteka = document.querySelector("#team-project-filmoteka");

//Personal open btns id-s
const projectOpenBtnGuessMyNumber = document.querySelector(
  "#personal-project-guess_my_number-btn"
);
const projectOpenBtnPigGame = document.querySelector(
  "#personal-project-pig-game-btn"
);
const projectOpenBtnWhatWhereWhen = document.querySelector(
  "#personal-project-what-where-when-btn"
);
// -------------look here
const projectOpenBtnProjectGoit = document.querySelector(
  "#personal-project-goit-btn"
);

//Team open btns id-s
const projectOpenBtnIceCream = document.querySelector(
  "#team-project-ice-cream-btn"
);
const projectOpenBtnFilmoteka = document.querySelector(
  "#team-project-filmoteka-btn"
);

const projectModals = [
  projectModalGuessMyNumber,
  projectModalPigGame,
  projectModaWhatWhereWhen,
  projectModalProjectGoit,
  projectModalIceCream,
  projectModalFilmoteka,
];
const projectBtns = [
  projectOpenBtnGuessMyNumber,
  projectOpenBtnPigGame,
  projectOpenBtnWhatWhereWhen,
  projectOpenBtnProjectGoit,
  projectOpenBtnIceCream,
  projectOpenBtnFilmoteka,
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
