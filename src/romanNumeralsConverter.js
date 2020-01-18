const RomanNumerals = [
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"}
]


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