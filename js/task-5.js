function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  document.body.style.backgroundColor = newColor;

  colorSpan.textContent = newColor;
});