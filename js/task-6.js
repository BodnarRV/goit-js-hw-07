function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
  }

  divBox.appendChild(fragment);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

createButton.addEventListener("click", (event) => {
  destroyBoxes();
  const input = document.querySelector('input');
  const inputValue = input.value;

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = '';
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyButton.addEventListener("click", event => {
  destroyBoxes();
})
