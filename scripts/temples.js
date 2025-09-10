const yearElement = document.getElementById("currentyear");
const currentyear = new Date().getFullYear();
yearElement.textContent = currentyear;

const lastModifiedElement = document.querySelector(".lastModified");
let modifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${modifiedDate}`;

const hamburguerBtn = document.getElementById("hamburguer");
const navMenu = document.getElementById("primary-nav");

hamburguerBtn.addEventListener("click", () =>{
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");
    hamburguerBtn.textContent = isOpen ? "✕" : "☰"
    hamburguerBtn.setAttribute("aria-expanded", isOpen);
    document.querySelector("header h1").style.display = isOpen ? "none" : "block";
});