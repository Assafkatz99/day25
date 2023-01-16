// 4
export const greet = (name, formal=false) => {
if (formal){
    return `Good evening, ${name}`
}
else {
    return `Hi, ${name}`
}
}

// 5

export const calculate = (num1, num2, operation = "add") => {
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  };
  