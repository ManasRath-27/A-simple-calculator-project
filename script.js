const num_1 = Number(prompt("Give the first Number."));
const num_2 = Number(prompt("Give the Second Number."));

let Operation = prompt(
  "What to do with these numbers. Tell an operation like +, -, *,or /"
);
console.log(Operation);
let result;
let symbol;
if (Operation === "+" || Operation === "add") {
  result = num_1 + num_2;
  symbol = "adding";
} else if (Operation === "-" || Operation === "subtract") {
  result = num_1 - num_2;
  symbol = "subtracting";
} else if (Operation === "*" || Operation === "multiply") {
  result = num_1 * num_2;
  symbol = "multiplying";
} else if (Operation === "/" || Operation === "divide") {
  result = num_1 / num_2;
  symbol = "dividing";
} else {
  alert(
    "Sorry! I can only add, subtract, multiply or divide two given numbers. More features will be added soon ."
  );
}

alert(`The result of ${symbol} ${num_1} and ${num_2} is ${result}`);
