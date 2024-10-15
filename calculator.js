const calc = (num1, op, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid input type");
  }
  switch (op) {
    case "+": {
      if (num1 + num2 > 1000) {
        return 1000;
      }
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "*": {
      return num1 * num2;
    }
    case "/": {
      if (num2 == 0) {
        throw new Error("error");
      }
      return num1 / num2;
    }
    default:
      throw new Error("Invalid operator");
  }
};
module.exports = calc;
