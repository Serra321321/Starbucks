let button = document.querySelector("header button");

button.onclick = toggleMenu;

function toggleMenu() {
  let nav = document.querySelector("header nav");
  button.classList.toggle("is-open");

  nav.classList.toggle("open");
}

// Code met ChatGPT 
// Prompt: "Hoe zorg ik ervoor dat mijn footer als het scherm groter wordt als 700px de footer opengeklapt blijft staan"


function toggleFooterDetails() {
  const details = document.querySelectorAll("footer details");

  if (window.innerWidth > 700) {
    details.forEach(detail => detail.setAttribute("open", ""));
  } else {
    details.forEach(detail => detail.removeAttribute("open"));
  }
}

window.addEventListener("load", toggleFooterDetails);
window.addEventListener("resize", toggleFooterDetails);

  