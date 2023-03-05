function reverseString(string) {
    if(typeof string !== "string") return "Enter a valid string";
    if(string.length === 0) return '';

    return reverseString(string.slice(1)) + string[0];
}

module.exports = reverseString;