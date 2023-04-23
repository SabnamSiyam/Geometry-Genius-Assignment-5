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
  trElement.innerHTML = `
            <th class="font-bold text-2xl">${SerialCount()}</th>
            <td class="text-2xl">${Name}</td>
            <td class="text-2xl">${Area}cm<sup>2</sup> </td>
            <td><button class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg">Convert to
          m<sup>2</sup></button></td>
            `;
  tableContainer.appendChild(trElement);
}
