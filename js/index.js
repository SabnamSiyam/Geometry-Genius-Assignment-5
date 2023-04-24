// -----------------Triangle---------
document
  .getElementById("triangle-calculate-btn")
  .addEventListener("click", function () {
    const b = getInputFieldValueById("triangle-inputfield-b");
    const h = getInputFieldValueById("triangle-inputfield-h");
    const Name = document.getElementById("name-triangle").innerText;

    // alert for invalid Number
    if (isNaN(b && h)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (b < 0 || h < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // Area (A) = 0.5 × b × h
    const Area = b * h * 0.5;
    SetAreaCalculation(Name, Area);
  });

// -----------Rectangle------------
document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    const w = getInputFieldValueById("rectangle-inputfield-w");
    const l = getInputFieldValueById("rectangle-inputfield-l");
    const Name = document.getElementById("name-triangle").innerText;

    // alert for invalid Number
    if (isNaN(w && l)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (w < 0 || l < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // Area (A) = w × l
    const Area = w * l;
    SetAreaCalculation(Name, Area);
  });

// ------------------Parallelogram--------------
document
  .getElementById("parallelogram-calculate-btn")
  .addEventListener("click", function () {
    const b = getInputFieldValueById("parallelogram-inputfield-b");
    const h = getInputFieldValueById("parallelogram-inputfield-h");
    const Name = document.getElementById("name-parallelogram").innerText;

    // alert for invalid Number
    if (isNaN(b && h)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (b < 0 || h < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // Area (A) = b × h
    const Area = b * h;
    SetAreaCalculation(Name, Area);
  });

// ------------------Rhombus--------------
document
  .getElementById("rhombus-calculate-btn")
  .addEventListener("click", function () {
    const d1 = getInputFieldValueById("rhombus-inputfield-d1");
    const d2 = getInputFieldValueById("rhombus-inputfield-d2");
    const Name = document.getElementById("name-rhombus").innerText;

    // alert for invalid Number
    if (isNaN(d1 && d2)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (d1 < 0 || d2 < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // Area (A) = 0.5 × d1 × d2
    const Area = 0.5 * d1 * d2;
    SetAreaCalculation(Name, Area);
  });

// ------------------Pentagon--------------
document
  .getElementById("pentagon-calculate-btn")
  .addEventListener("click", function () {
    const p = getInputFieldValueById("pentagon-inputfield-p");
    const b = getInputFieldValueById("pentagon-inputfield-b");
    const Name = document.getElementById("name-pentagon").innerText;

    // alert for invalid Number
    if (isNaN(p && b)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (p < 0 || b < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // Area (A) = 0.5 × p × b
    const Area = 0.5 * p * b;
    SetAreaCalculation(Name, Area);
  });

// ------------------Ellipse--------------
document
  .getElementById("ellipse-calculate-btn")
  .addEventListener("click", function () {
    const a = getInputFieldValueById("ellipse-inputfield-a");
    const b = getInputFieldValueById("ellipse-inputfield-b");
    const Name = document.getElementById("name-ellipse").innerText;
    // alert for invalid Number
    if (isNaN(a && b)) {
      alert("Please Enter Valid Number");
      return 0;
    }
    //  Alert for negative number
    if (a < 0 || b < 0) {
      alert("Please Enter Valid positive Number");
      return 0;
    }
    // π=3.14
    // Area (A) =πab
    const Area = 3.14 * a * b;
    SetAreaCalculation(Name, Area);
  });

