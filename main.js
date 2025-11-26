const navMenu = document.querySelector(".menu");
const btnMenu = document.querySelector(".btn_menu");
const iconMenu = document.querySelectorAll(".icon_menu");

btnMenu.addEventListener("click", function () {
  navMenu.classList.toggle("-translate-x-full");

  iconMenu.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});
