function calculate() {
    var operation = document.getElementById("operation").value;
    var first = parseFloat(document.getElementById("first").value);
    var second = parseFloat(document.getElementById("second").value);

    switch (operation) {
      case "+":
        result = first + second;
        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = first / second;
    }
    document.getElementById("result").innerText =
      `Result: ${result}`;
  }