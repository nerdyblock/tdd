function capitalize(letter) {
    if(typeof letter !== "string") {
        return "Enter a valid string"
    }

    return letter[0].toUpperCase() + letter.slice(1);
}

module.exports = capitalize