//fuction for get input field value by id---->>>
function getInputFieldValueById(inputId) {
  const inputFieldElement = document.getElementById(inputId);
  const inputFieldStringValue = inputFieldElement.value;
  const inputFiledNumbericValue = parseFloat(inputFieldStringValue);
  inputFieldElement.value = "";
  return inputFiledNumbericValue;
}

//  Serial Count Function
let value = 0;
function SerialCount() {
  value += 1;
  return value;
}

// function for set Area Calculation values
function SetAreaCalculation(Name, Area) {
  const trElement = document.createElement("tr");
  const tableContainer = document.getElementById("table-container");
  // Converting The Area value into Two Decimals
  const TwoDecimalsArea = Area.toFixed(2);

  trElement.innerHTML = `
            <th class="font-bold text-2xl">${SerialCount()}</th>
            <td class="text-xl">${Name}</td>
            <td class="text-xl">${TwoDecimalsArea}cm<sup>2</sup> </td>
            <td><button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">Convert to
          m<sup>2</sup></button></td>
            `;
  tableContainer.appendChild(trElement);
}

// --------Random Colors function ---------

function RandomColorForCard(inputCardId) {
  function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + color.join(", ") + ")";
  }
  document
    .getElementById(inputCardId)
    .addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = randomColor();
    });
}

//  -----Random Colors Section -----

// Random Color for triangle
RandomColorForCard("random-bg-triangle");

// Random Color for rectangle
RandomColorForCard("random-bg-rectangle");

// Random Color for parallelogram
RandomColorForCard("random-bg-parallelogram");

// Random Color for rhombus
RandomColorForCard("random-bg-rhombus");

// Random Color for pentagon
RandomColorForCard("random-bg-pentagon");

// Random Color for pentagon
RandomColorForCard("random-bg-ellipse");
