//const { default: test } = require('node:test')
//const { describe } = require('yargs')
const stampCalc = require('../LBBT-calculator.js')

describe('tests for the LBBT calculator', () => {
    it('given a house price of £200,000 the calculator should return £1100', () => {
        expect(stampCalc(200000)).toEqual(1100);
    })
})