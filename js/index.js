// Triangle
document
  .getElementById("triangle-calculate")
  .addEventListener("click", function () {
    const b = getInputFieldValueById("tri-inputfield-b");
    const h = getInputFieldValueById("tri-inputfield-h");
    const Name = document.getElementById("name-triangle").innerText;
    
    // Invalid number alert
    if (isNaN(b && h)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    const Area = b * h * 0.5;
    SetAreaCalculation(Name, Area);
  });
