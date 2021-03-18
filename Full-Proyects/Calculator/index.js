//Parts of the HTML RELEVANT
const result = document.querySelector("#result");
const buttonsSection = document.querySelector(".buttons-section");
//Variables needed to handle important values
let numberInput = "";
let total = 0;
let lastSymbol = "";

//Functions need to handle some kind of logic
const add = (value) => {
  total += +value;
};
const substract = (value) => {
  total -= value;
};
const multiply = (value) => {
  total *= value;
};
const divide = (value) => {
  total /= value;
};
const handleOperations = (option) => {
  numberInput = parseInt(numberInput);
  if (total === 0) {
    total = parseInt(numberInput);
  } else if (option === "÷") {
    divide(numberInput);
  } else if (option === "x") {
    multiply(numberInput);
  } else if (option === "-") {
    substract(numberInput);
  } else if (option === "+") {
    add(numberInput);
  }
  lastSymbol = option;
  // numberInput = 0;
  //result.innerHTML = "0";
};
const handleNumber = (number) => {
  if (numberInput === 0) {
    numberInput = "";
  }
  const numberString = number.toString();
  numberInput = numberInput + numberString;
  result.innerHTML = numberInput;
};

const handleEqual = () => {
  numberInput = 0;
  result.innerHTML = total;
  lastSymbol = "";
};
const handleDelete = () => {
  numberInput = Math.floor(numberInput / 10);
  result.innerHTML = numberInput;
};
const handleReset = () => {
  total = 0;
  result.innerHTML = 0;
  numberInput = "";
  lastSymbol = "";
};
buttonsSection.addEventListener("click", (e) => {
  const value = e.target.innerHTML;
  if (!isNaN(value)) {
    handleNumber(value);
  } else if (value === "=") {
    if (lastSymbol != "") {
      handleOperations(lastSymbol);
    }
    handleEqual();
    lastSymbol = "";
  } else if (value === "←") {
    handleDelete();
  } else if (value === "C") {
    handleReset();
  } else {
    if (lastSymbol != "") {
      console.log("NUMBER INPUT", numberInput);
      handleOperations(lastSymbol);
      numberInput = 0;
      if (value == "x" || value == "÷") {
        numberInput = 1;
      }
      lastSymbol = "";
    }
    if (lastSymbol == "" && (value == "x" || value == "÷") && total != 0) {
      numberInput = 1;
    }
    handleOperations(value);
    numberInput = 0;
    result.innerHTML = "0";
  }
});
