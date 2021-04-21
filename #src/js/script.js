const hamburger = document.querySelector(`.hamburger`);

hamburger.addEventListener(`click`, (e) => {
    e.target.closest(`.hamburger`).classList.toggle(`hamburger--active`);
    e.target.closest(`.menu`).querySelector(`.menu__items`).classList.toggle(`menu__items--active`);
});