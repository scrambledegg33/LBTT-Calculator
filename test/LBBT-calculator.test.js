const {calTaxSum, calTax, stampCalc} = require('../LBBT-calculator.js')

describe('tests for checking the right amounts of tax are returned for house prices that fit into different tax brackets', () => {
    it('given a house price under £145,000 no tax should be paid 0% tax', () => {
        expect(stampCalc(145000)).toEqual(0);
    }),
    it('given a house price of £200,000 the calculator should return £1100 2% tax', () => {
        expect(stampCalc(200000)).toEqual(1100);
    }),
    it('given a house price of £275,000 the calculator should return £3349 5% tax', () => {
        expect(stampCalc(275000)).toEqual(3350);
    }),
    it('given a house price of £550,000 the calculator should return £28350 10% tax', () => {
        expect(stampCalc(550000)).toEqual(28350);
    }),
    it('given a house price of £900,000 the calculator should return £66350 12% tax', () => {
        expect(stampCalc(900000)).toEqual(66350);
    })
})