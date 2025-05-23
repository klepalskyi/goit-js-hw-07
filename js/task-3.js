const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', () => {
    const valueTrimed = input.value.trim();
    output.textContent = valueTrimed !== "" ? valueTrimed : "Anonymous";
});