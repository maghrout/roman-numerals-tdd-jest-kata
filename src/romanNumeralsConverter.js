const RomanNumeralsConverter = (number) => {
    let romanNumerals = "";

    while(number > 0) {
        romanNumerals += "I";
        number -= 1;
    }

    return romanNumerals;
}

module.exports = RomanNumeralsConverter;