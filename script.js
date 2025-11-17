// Get elements
// Project One
const openBtn1 = document.getElementById("openProjectOne");
const popup1 = document.getElementById("projectOnePopup");
const closeBtn1 = document.getElementById("closePopupOne");

openBtn1.addEventListener("click", () => {
  popup1.style.display = "flex";
});

closeBtn1.addEventListener("click", () => {
  popup1.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup1) {
    popup1.style.display = "none";
  }
});

// Project Two
const openBtn2 = document.getElementById("openProjectTwo");
const popup2 = document.getElementById("projectTwoPopup");
const closeBtn2 = document.getElementById("closePopupTwo");

openBtn2.addEventListener("click", () => {
  popup2.style.display = "flex";
});

closeBtn2.addEventListener("click", () => {
  popup2.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.style.display = "none";
  }
});

// Project Three
const openBtn3 = document.getElementById("openProjectThree");
const popup3= document.getElementById("projectThreePopup");
const closeBtn3 = document.getElementById("closePopupThree");

openBtn3.addEventListener("click", () => {
  popup3.style.display = "flex";
});

closeBtn3.addEventListener("click", () => {
  popup3.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup3) {
    popup3.style.display = "none";
  }
});