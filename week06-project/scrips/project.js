const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.getElementById("primary-nav");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const isOpen = navMenu.classList.contains("open");

    
    hamburgerBtn.textContent = isOpen ? "✕" : "☰";

    
    hamburgerBtn.setAttribute("aria-expanded", isOpen);

    
    document.querySelector("header h1").style.display = isOpen ? "none" : "block";
});


const yearElement = document.getElementById("currentyear");
yearElement.textContent = new Date().getFullYear();


const lastModifiedElement = document.querySelector(".lastModified");
lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;




const siteInfo = {
  title: "Champollion & The Birth of Egyptology",
  author: "Your Name",
  pages: ["index", "early-life", "hieroglyphs", "legacy"],
};


siteInfo.pages.forEach(page => console.log(`Loaded: ${page}.html`));




const lastVisit = localStorage.getItem("lastVisit");
if (lastVisit) {
  console.log(`Welcome back! Your last visit was on ${lastVisit}`);
} else {
  console.log("Welcome! This is your first visit.");
}
localStorage.setItem("lastVisit", new Date().toLocaleString());


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");
  if (form) { 
    const feedback = document.createElement("p");
    feedback.id = "form-feedback";
    form.appendChild(feedback);

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#name").value.trim();
      const email = document.querySelector("#email").value.trim();
      const message = document.querySelector("#message").value.trim();

      if (name && email && message) {
        feedback.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
        feedback.className = "success";
        form.reset();
      } else {
        feedback.textContent = "⚠️ Please fill out all fields before submitting.";
        feedback.className = "error";
      }
    });
  }
});

