function converter() {

  event.preventDefault();

  
  const fromUnit = document.getElementById("fromunit").value;
  const toUnit = document.getElementById("tounit").value;
  const inputTemperature = parseFloat(document.getElementById("temperature").value);
  let result;

  
  if (isNaN(inputTemperature)) {
      alert("Please enter a valid temperature.");
      return;
  }

  if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
          result = (inputTemperature * 9/5) + 32;
      } else if (toUnit === "kelvin") {
          result = inputTemperature + 273.15;
      } else {
          result = inputTemperature; 
      }
  } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
          result = (inputTemperature - 32) * 5/9;
      } else if (toUnit === "kelvin") {
          result = (inputTemperature - 32) * 5/9 + 273.15;
      } else {
          result = inputTemperature; 
      }
  } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
          result = inputTemperature - 273.15;
      } else if (toUnit === "fahrenheit") {
          result = (inputTemperature - 273.15) * 9/5 + 32;
      } else {
          result = inputTemperature; 
      }
  }

  
  document.getElementById("result").value = result.toFixed(2) + " " + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}


document.getElementById("clearButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.getElementById("temperature").value = '';
  document.getElementById("result").value = '';
  document.getElementById("fromunit").selectedIndex = 0;
  document.getElementById("tounit").selectedIndex = 0;
});