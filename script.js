let button = document.querySelector("header button");
// let menuButton = document.querySelector("button"); 

button.onclick = toggleMenu;

function toggleMenu() {
  let nav = document.querySelector("header nav");
  button.classList.toggle("is-open");

  nav.classList.toggle("open");
}

// window.addEventListener("load", responivemenu);
// window.addEventListener("resize", responivemenu);
 
// console.log(menuButton);
 

document.querySelectorAll("footer button").forEach(button => {
button.addEventListener("click", () => {
const list = button.nextElementSibling;
list.style.display = list.style.display === "block" ? "none" : "block";
});
});

  //rgl 17 is niet goed want is styling
  