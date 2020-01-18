
let numeral = (value, numeral) => {
    return {value: value, numeral: numeral};
}

const RomanNumerals = [
    numeral(1000, "M"),
    numeral(900, "CM"),
    numeral(500, "D"),
    numeral(400, "CD"),
    numeral(100, "C"),
    numeral(90, "XC"),
    numeral(50, "L"),
    numeral(40, "XL"),
    numeral(10, "X"),
    numeral(9, "IX"),
    numeral(5, "V"),
    numeral(4, "IV"),
    numeral(1, "I")
];

const RomanNumeralsConverter = (number) => {
    let romanNumerals = "";

    RomanNumerals.forEach((romanNumeral) => {
        for(;number >= romanNumeral.value; number -= romanNumeral.value) {
            romanNumerals += romanNumeral.numeral;
        }
    })

    return romanNumerals;
}

module.exports = RomanNumeralsConverter;