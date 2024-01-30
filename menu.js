// burger menu header, staсkoverflow и чашка чая
const btn = document.querySelector(".header__button-menu");
const menu = document.querySelector(".header__list");
btn.addEventListener("click", () => {
    if(menu.style.display == "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
})