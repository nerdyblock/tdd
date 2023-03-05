const capitalize = require('./capitalize');

it('first letter capital', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('HELLO');
});

it('input not string', () => {
    expect(capitalize(123)).toBe('Enter a valid string');
});