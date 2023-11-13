function submitData() {
  const balance = parseFloat(document.getElementById("balance").value);
  const annualRate = parseFloat(document.getElementById("annualRate").value);
  const months = parseFloat(document.getElementById("months").value);

  if (
    isNaN(balance) ||
    isNaN(annualRate) ||
    isNaN(months) ||
    balance < 0 ||
    annualRate < 0 ||
    months < 0
  ) {
    updateDOM("Please enter valid positive numbers for all fields.", "red");
  } else {
    computeFutureValue(balance, annualRate, months);
  }
}

function updateDOM(value, color) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = value;
  resultDiv.style.color = color;
}

function computeFutureValue(balance, annualRate, months) {
  const monthlyRate = annualRate / 1200; // Assuming compounding monthly
  let futureValue = balance;

  for (let i = 0; i < months; i++) {
    futureValue += futureValue * monthlyRate;
  }

  updateDOM(`Future Value: $${futureValue.toFixed(2)}`, "green");
}
