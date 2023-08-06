const calcButton = document.querySelector('.calc-button');
const resultParagraph = document.querySelector('.result p');

calcButton.addEventListener('click', calculateIMC);

function calculateIMC(e) {
  e.preventDefault()
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    resultParagraph.textContent = "Insira valores válidos de peso e altura.";
    return;
  }

  const imc = (weight / (height * height)).toFixed(2).replace('.', ',');

  resultParagraph.textContent = `${weight}kg * ${height}m = ${imc}`;
}
