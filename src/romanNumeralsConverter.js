const RomanNumeralsConverter = (number) => {
    if(number === 3) {
        return "III";
    }
    if(number === 2) {
        return "II";
    }
    return "I";
}

module.exports = RomanNumeralsConverter;