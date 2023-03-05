function analyzeArray(arr) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    arr.forEach(item => {
        if(item < min) min = item;
        if(item > max) max = item;
    });

    return {
        average : arr.reduce((a, b) => a + b, 0)/arr.length,
        length : arr.length,
        min,
        max
    };
}

module.exports = analyzeArray;