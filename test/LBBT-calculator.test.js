const {calTaxSum, calTax, LBBTCalc} = require('../LBBT-calculator.js')

describe('tests for checking the right amounts of tax are returned for house prices that fit into different tax brackets', () => {
    it('given a house price under £145,000 no tax should be paid 0% tax', () => {
        expect(LBBTCalc(145000)).toEqual(0);
    })
    it('given a house price of £200,000 the calculator should return £1100 2% tax', () => {
        expect(LBBTCalc(200000)).toEqual(1100);
    })
    it('given a house price of £275,000 the calculator should return £3349 5% tax', () => {
        expect(LBBTCalc(275000)).toEqual(3350);
    })
    it('given a house price of £550,000 the calculator should return £28350 10% tax', () => {
        expect(LBBTCalc(550000)).toEqual(28350);
    })
    it('given a house price of £900,000 the calculator should return £66350 12% tax', () => {
        expect(LBBTCalc(900000)).toEqual(66350);
    })
})

describe('testing calTax function', () => {
    it('given an amount and a percentage return the result of those values multiplied', () => {
        expect(calTax(50000, 0.05)).toEqual(2500);
    })
})

describe('testing calTaxSum function', () => {
    it('given a houseprice that should not be taxed at a higher tax band return 0, e.g house price is £170000 and the index for the tax band is 2 which is a percentage of 0.05 percent the function should return 0 as that house should be taxed at 0.02 percent', () => {
        expect(calTaxSum(170000, 2)).toEqual(0);
    })
    it('given a houseprice with an index for the tax rate that should be applied return the amount that should be taxed at that given rate', () => {
        expect(calTaxSum(170000, 1)).toEqual(25000);
    })
    it('for houses over 145000 when index 0 is inputted into calTaxSum it should return 145000 as that amount is not taxed', () => {
        expect(calTaxSum(700000, 0)).toEqual(145000);
    })
})