const form = document.querySelector("#calculator form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let weight = document.querySelector("#weight");
  let height = document.querySelector("#height");
  const alertFields = document.querySelectorAll(".alertFields");

  validators(weight.value, height.value, alertFields);

  weight.value = "";
  height.value = "";
});

function validators(weight, height, alertFields) {
  if (weight === "" || weight < 0 || isNaN(weight)) {
    alertFields[0].innerText = "Please enter a valid weight..!";
  } else {
    alertFields[0].innerText = "";
    weight = parseFloat(weight);
  }

  if (height === "" || height < 0 || isNaN(height)) {
    alertFields[1].innerText = "Please enter a valid height..!";
  } else {
    alertFields[1].innerText = "";
    height = parseFloat(height);
  }

  bmiCalculator(weight, height);
}

function bmiCalculator(weight, height) {
  const meters = height * 0.305;
  const bmiValue = weight / (meters * meters);

  displayValue(bmiValue.toFixed(2));
}

function displayValue(bmiValue) {
  let result = document.querySelector("#bmi-value");

  if (bmiValue <= 18.4) {
    result.innerText = `${bmiValue} (Underweight)`;
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    result.innerText = `${bmiValue} (Normal)`;
  } else if (bmiValue >= 25.0 && bmiValue <= 39.9) {
    result.innerText = bmiValue + " (Overweight)";
  } else {
    result.innerText = bmiValue + " (Obese)";
  }
}
