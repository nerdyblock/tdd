const caesarCipher = require('./caesarCipher');

it('check single alphabet', () => {
    expect(caesarCipher('m')).toBe('n');
});

it('check for z', () => {
    expect(caesarCipher('z')).toBe('a');
});

it('check for string', () => {
    expect(caesarCipher('this is a string')).toBe('uijt jt b tusjoh');
});

it('check for upper case', () => {
    expect(caesarCipher('This is a String')).toBe('Uijt jt b Tusjoh');
})

it('check for punctuation', () => {
    expect(caesarCipher('this is a string!')).toBe('uijt jt b tusjoh!')
})

it('check for punctuation and upper case', () => {
    expect(caesarCipher('This is a STRING!')).toBe('Uijt jt b TUSJOH!')
})

it('check for numbers and special character', () => {
    expect(caesarCipher('this 90 is a string!@#$')).toBe('uijt 90 jt b tusjoh!@#$')
})