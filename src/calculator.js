function isValid(a, b) {
    if(typeof a === "number" && typeof b === "number") return true;

    return false;
}

const calculator = {
    add: (a, b) => (isValid(a,b)) ? a+b : "value is string not number",
    subtract: (a, b) => (isValid(a,b)) ? a-b : "value is string not number",
    multiply: (a, b) => (isValid(a,b)) ? a*b : "value is string not number",
    divide: (a, b) => (isValid(a,b)) ? a/b : "value is string not number",
}

module.exports = calculator;