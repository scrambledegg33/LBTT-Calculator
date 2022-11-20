let standBuyer = [0, 0.02, 0.05, 0.10, 0.12];

let taxBand = [0, 145000, 250000, 325000, 750000, Infinity];

let totalTax = 0;

let calTaxSum = function (houseCost, i) {
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

let calTax = function (taxableSum, percentage) {
return taxableSum * percentage;
}

let storeTax = function(tax) {
totalTax += tax;
}

let getTotalTax = function() {
return totalTax;
}

let calEffRate = function(totalTax, houseCost) {

return (totalTax / houseCost) * 100;
}

let stampCalc = function(houseCost) {
if (houseCost >= 0) {
for (let i = 0; i < buyerType.length; i++) {
let taxableSum = calTaxSum(houseCost, i);
if (taxableSum === 0) {
console.log("there is no tax to be paid")

} else {

//8.Calculate Tax
let tax = calTax(taxableSum, buyerType[i]);

console.log("You owe " + tax + " in tax.");
}
}

//Total Tax
let totalTax = updateTotalTax();

updateEffectiveRate(totalTax, houseCost);
}
};

let updateTotalTax = function() {
//11. Get total Tax

let totalTax = getTotalTax();
displayTotalTax(totalTax);
return totalTax;
}

let updateEffectiveRate = function(totalTax, houseCost) {
//12. Calcualate Effective Rate
let effRate = calEffRate(totalTax, houseCost);

}