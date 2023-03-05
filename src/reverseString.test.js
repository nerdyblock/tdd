const reverseString = require('./reverseString');

it('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

it('input not a string', () => {
    expect(reverseString(123)).toBe("Enter a valid string");
});