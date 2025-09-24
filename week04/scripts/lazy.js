const yearElement = document.getElementById("currentyear");
const currentyear = new Date().getFullYear();
yearElement.textContent = currentyear;

const lastModifiedElement = document.querySelector(".lastModified");
let modifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${modifiedDate}`;