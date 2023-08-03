//alert("working");

let degreesElement = document.getElementById("degrees");
let fahrenheitBtn = document.getElementById("fahrenheitBtn");
let celsiusBtn = document.getElementById("celsiusBtn");
let fahrenheitValue = document.getElementById("fahrenheitValue");
let celsiusValue = document.getElementById("celsiusValue");
fahrenheitValue.textContent = "";
celsiusValue.textContent = "";

function convertToFahrenheit() {
    let degreeInputValue = degreesElement.value;
    let convertToFahrenheit = (degreeInputValue * 9 / 5) + 32;
    fahrenheitValue.textContent = parseFloat(convertToFahrenheit);
}

function convertToCelsius() {
    let degreeInputValue = degreesElement.value;
    let convertToCelsius = (degreeInputValue - 32) * 5 / 9;
    celsiusValue.textContent = parseFloat(convertToCelsius);
}

fahrenheitBtn.addEventListener('click', convertToFahrenheit);
celsiusBtn.addEventListener("click", convertToFahrenheit);