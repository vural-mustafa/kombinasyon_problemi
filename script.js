const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const n = parseInt(document.getElementById('n').value);
  const r = parseInt(document.getElementById('r').value);

  if (!isNaN(n) && !isNaN(r) && n >= 0 && r >= 0 && n >= r) {
    const combination = calculateCombination(n, r);
    resultDiv.innerHTML = `C(${n},${r}) = ${combination}`;
  } else {
    resultDiv.innerHTML = 'Lütfen geçerli değerler girin.';
  }
});

function calculateCombination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
