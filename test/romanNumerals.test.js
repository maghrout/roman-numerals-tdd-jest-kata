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
})