function limitDecimalPlaces(num, maxDigit = 10000000) {
    return Math.round(num * maxDigit) / maxDigit;
  }
  ​
  //Calculator Functionalities
  function calculator(v1, v2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = v1 + v2;
        result = limitDecimalPlaces(result);
        return result;
      case "-":
        result = v1 - v2;
        result = limitDecimalPlaces(result);
        return result;
      case "x":
        result = v1 * v2;
        result = limitDecimalPlaces(result);
        return result;
      case "/":
        result = v1 / v2;
        result = limitDecimalPlaces(result);
        return result;
      default:
        return ;
    }
  }