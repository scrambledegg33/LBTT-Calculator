let standBuyerRates = [0, 0.02, 0.05, 0.10, 0.12];
let taxBand = [0, 145000, 250000, 325000, 750000, Infinity];


function calTaxSum(houseCost, i) {
let loBand = taxBand[i];
let upBand = taxBand[i+1];
if ((houseCost - loBand) <= 0) {
return 0;
} else if ((houseCost - loBand) > 0 && (houseCost - loBand) < (upBand - loBand)) {
return (houseCost - loBand);
} else {
return (upBand - loBand);
}
}

function calTax(taxableSum, percentage) {
    return taxableSum * percentage;
}


function LBBTCalc(houseCost) {
    let totalTax = 0;
    if (houseCost >= 0) {
        for (let i = 0; i < standBuyerRates.length; i++) {
            let taxableSum = calTaxSum(houseCost, i);
            
                let tax = calTax(taxableSum, standBuyerRates[i]);
                if (tax > 0){
                    totalTax += tax;
                }
            
        }
    }
    return totalTax;
};


//console.log(LBBTCalc(200000));
console.log(calTaxSum(170000, 0));
//console.log(calTax(55000, 0.02));
module.exports = {calTaxSum, calTax, LBBTCalc};
