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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
];

function createTempleCard(filteredTemples){

filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "Size:">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt",`${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".gallery").appendChild(card);
})
}
createTempleCard(temples);

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    let oldClick = temples.filter(temple =>{
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year <= 1986
    })
    document.querySelector(".gallery").innerHTML = "";
    createTempleCard(oldClick);
})
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    let newClick = temples.filter(temple =>{
        let year = parseInt(temple.dedicated.split(",")[0]);
        return year >= 2015
    })
    document.querySelector(".gallery").innerHTML = "";
    createTempleCard(newClick);
})  
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    const largeClick = temples.filter(temple => temple.area > 90000);
    document.querySelector(".gallery").innerHTML = ""; 
    createTempleCard(largeClick);
});
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    const smallClick = temples.filter(temple => temple.area < 10000);
    document.querySelector(".gallery").innerHTML = ""; 
    createTempleCard(smallClick);
});
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () =>{
    createTempleCard(temples);
});



