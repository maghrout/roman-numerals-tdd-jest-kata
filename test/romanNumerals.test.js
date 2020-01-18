const romanNumeralsConverter = require('../src/romanNumeralsConverter');

describe('RomanNumeralsConverterTest', () => {
    it('Takes 1 and returns I', () => {
        expect(romanNumeralsConverter(1)).toEqual("I");
    })

    it('Takes 2 and returns II', () => {
        expect(romanNumeralsConverter(2)).toEqual("II");
    })

    it('Takes 3 and returns III', () => {
        expect(romanNumeralsConverter(3)).toEqual("III");
    })

    it('Takes 4 and returns IV', () => {
        expect(romanNumeralsConverter(4)).toEqual("IV");
    })

    it('Takes 5 and returns V', () => {
        expect(romanNumeralsConverter(5)).toEqual("V");
    })

    it('Takes 6 and returns VI', () => {
        expect(romanNumeralsConverter(6)).toEqual("VI");
    })

    it('Takes 7 and returns VII', () => {
        expect(romanNumeralsConverter(7)).toEqual("VII");
    })

    it('Takes 8 and returns VIII', () => {
        expect(romanNumeralsConverter(8)).toEqual("VIII");
    })

    it('Takes 9 and returns IX', () => {
        expect(romanNumeralsConverter(9)).toEqual("IX");
    })

    it('Takes 10 and returns X', () => {
        expect(romanNumeralsConverter(10)).toEqual("X");
    })

    it('Takes 1954 and returns MCMLIV', () => {
        expect(romanNumeralsConverter(1954)).toEqual("MCMLIV");
    })

    it('Takes 1990 and returns MCMXC', () => {
        expect(romanNumeralsConverter(1990)).toEqual("MCMXC");
    })

    it('Takes 436 and returns CDXXXVI', () => {
        expect(romanNumeralsConverter(436)).toEqual("CDXXXVI");
    })
})