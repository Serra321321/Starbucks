let menuButton = document.querySelector("header > nav > button"); 
let navMenu = document.querySelector("header nav ul");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("is-open");
  navMenu.classList.toggle("show-menu");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("is-open");
    navMenu.classList.remove("show-menu");
  });
});

document.querySelectorAll("footer button").forEach(button => {
  button.addEventListener("click", () => {
    const list = button.nextElementSibling;
    list.style.display = list.style.display === "block" ? "none" : "block";
  });
});
