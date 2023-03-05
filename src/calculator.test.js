const calculator = require('./calculator');

it('add two numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
});

it('two strings instead of number', () => {
    expect(calculator.add('1', 2)).toBe('value is string not number');
    expect(calculator.subtract('1', 2)).toBe('value is string not number');
    expect(calculator.multiply('1', 2)).toBe('value is string not number');
    expect(calculator.divide('1', 2)).toBe('value is string not number');
})

it('subtract two numbers', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

it('multiply two numbers', () => {
    expect(calculator.multiply(1,2)).toBe(2);
});

it('divide two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});