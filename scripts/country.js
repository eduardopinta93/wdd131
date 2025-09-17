const yearElement = document.getElementById("currentyear");
const currentyear = new Date().getFullYear();
yearElement.textContent = currentyear;

const lastModifiedElement = document.querySelector(".lastModified");
let modifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${modifiedDate}`;


const temperature = 22; 
const windSpeed = 12;   


function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1); 
}


let windChillValue = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
  windChillValue = `${calculateWindChill(temperature, windSpeed)} °C`;
}


document.getElementById("windChill").textContent = windChillValue;
