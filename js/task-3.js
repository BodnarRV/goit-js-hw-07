const nameInput = document.querySelector("input");
const enteredName = document.querySelector("span");

nameInput.addEventListener("input", event => {
    const inputValue = event.target.value.trim();

    enteredName.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});