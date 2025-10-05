
let reviewCount = localStorage.getItem("reviewCount");
reviewCount = reviewCount ? parseInt(reviewCount) : 0;


reviewCount++;


localStorage.setItem("reviewCount", reviewCount);


const counterElement = document.getElementById("review-counter");
if (counterElement) {
  counterElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
}