const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyEl = document.body;

btn.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
