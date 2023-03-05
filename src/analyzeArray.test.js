const analyzeArray = require('./analyzeArray');

it('test for average', () => {
    expect(analyzeArray([1,2,3,4,5]).average).toBe(3);
});

it('test for length', () => {
    expect(analyzeArray([1,2,3,4,5]).length).toBe(5);
});

it('test for min', () => {
    expect(analyzeArray([1,2,3,4,5]).min).toBe(1);
});

it('test for max', () => {
    expect(analyzeArray([1,2,3,4,5]).max).toBe(5);
});