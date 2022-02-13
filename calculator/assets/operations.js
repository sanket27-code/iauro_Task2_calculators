var result = document.querySelector(".result");
var operation = document.querySelector(".operation");

function display(num) {
  operation.value += num;
}

function calculate() {
  try {
    if (operation.value == "") {
      result.value = "0";
    } else {
      result.value = eval(operation.value);
    }
  } catch (error) {
    alert("Invalid Operation!");
  }
}

function Clear() {
  operation.value = "";
  result.value = "";
}

function popout() {
  operation.value = operation.value.slice(0, -1);
}
