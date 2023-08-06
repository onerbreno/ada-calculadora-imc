const form = document.querySelector('.form-container');
const calcContainer = document.querySelector('.calc-container');
const calcText = document.querySelector('.calc-container p');
const resultContainer = document.querySelector('.result-container');
const resultBadge = document.querySelector('.result-badge');
const result = document.querySelector('.result-calc');

function getImcStatus(imc) {
  let statusClass = 'status-alert';
  let message = 'Obesidade';

  if (imc <= 18.5) {
    message = 'Abaixo do peso';
  } else if (imc <= 24.9) {
    statusClass = 'status-ok';
    message = 'Peso ideal';
  } else if (imc <= 29.9) {
    message = 'Sobrepeso';
  }

  return { statusClass, message };
}

function calculateIMC(e) {
  e.preventDefault();

  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;


  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    showError('Insira valores válidos de peso e altura.');
    return;
  }

  const imc = weight / (height * height);
  const imcFormatted = imc.toFixed(2).replace('.', ',');

  const {statusClass, message} = getImcStatus(imc)

  updateCalcText(weight, height, imcFormatted);
  updateResultElements(statusClass, message, imcFormatted);
}

function showError(message) {
  calcText.textContent = message;
  calcContainer.classList.remove('hidden');
}

function updateCalcText(weight, height, imcFormatted) {
  String(height).replace('.', ',')
  String(weight).replace('.', ',')
  calcContainer.classList.remove('hidden');

  calcText.textContent = `${weight}kg / (${height}m * ${height}m) = ${imcFormatted}`;
}

function updateResultElements(statusClass, message, imcFormatted) {
  resultBadge.textContent = message;
  result.textContent = imcFormatted;

  resultContainer.setAttribute('data-status', statusClass);
  resultBadge.setAttribute('data-status', statusClass);
  result.setAttribute('data-status', statusClass);
  resultContainer.classList.remove('hidden');
}

form.addEventListener('submit', calculateIMC);