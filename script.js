function calculateTax() {
  const grossIncome = parseFloat(document.getElementById("grossIncome").value);
  const extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0;
  const age = parseInt(document.getElementById("age").value);
  const deduction = parseFloat(document.getElementById("deduction").value) || 0;

  let overallIncome = grossIncome + extraIncome - deduction;
  let tax = 0;

  if (overallIncome > 800000) {
    if (age < 40) {
      tax = 0.3 * (overallIncome - 800000);
    } else if (age >= 40 && age < 60) {
      tax = 0.4 * (overallIncome - 800000);
    } else if (age >= 60) {
      tax = 0.1 * (overallIncome - 800000);
    }
  }

  const result = overallIncome - tax;

  document.getElementById("result").textContent = `Your overall income will be ${result} after tax deduction`;
  modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("taxForm");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementsByClassName("close")[0];
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      calculateTax();
    });
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });