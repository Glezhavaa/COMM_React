const toggle = document.querySelector("#toggleImage");
const vader = document.querySelector("#vader");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

toggle.addEventListener("click", () => {
    vader.classList.toggle("hidden");
})

calculate.addEventListener("click", () => {
    return result.textContent = Number(num1.value) + Number(num2.value);
})