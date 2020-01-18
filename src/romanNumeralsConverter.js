const RomanNumeralsConverter = (number) => {
    let romanNumerals = "";

    while(number > 0) {
        if(number === 4) {
            romanNumerals += "IV";
            number -= 4
        } else {
            romanNumerals += "I";
            number -= 1;
        }
    }

    return romanNumerals;
}

module.exports = RomanNumeralsConverter;