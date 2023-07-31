// Tax rates and thresholds 

const taxRates = [ 
    { lowerBound: 0, upperBound: 24000, rate: 10 }, 
    { lowerBound: 24001, upperBound: 40667, rate: 15 }, 
    { lowerBound: 40668, upperBound: 57333, rate: 20 }, 
    { lowerBound: 57334, upperBound: 74000, rate: 25 }, 
    { lowerBound: 74001, upperBound: Infinity, rate: 30 } 
]; 

const NHIFThresholds = [ 
    { lowerBound: 0, upperBound: 5999, contribution: 150 }, 
    { lowerBound: 6000, upperBound: 7999, contribution: 300 }, 
    { lowerBound: 8000, upperBound: 11999, contribution: 400 }, 
    { lowerBound: 12000, upperBound: 14999, contribution: 500 }, 
    { lowerBound: 15000, upperBound: 19999, contribution: 600 }, 
    { lowerBound: 20000, upperBound: 24999, contribution: 750 }, 
    { lowerBound: 25000, upperBound: 29999, contribution: 850 }, 
    { lowerBound: 30000, upperBound: 34999, contribution: 900 }, 
    { lowerBound: 35000, upperBound: 39999, contribution: 950 }, 
    { lowerBound: 40000, upperBound: 44999, contribution: 1000 }, 
    { lowerBound: 45000, upperBound: 49999, contribution: 1100 } , 
    { lowerBound: 50000, upperBound: 59999, contribution: 1200 },
    { lowerBound: 60000, upperBound: 69999, contribution: 1300 },
    { lowerBound: 70000, upperBound: 79999, contribution: 1400 }, 
    { lowerBound: 80000, upperBound: 89999, contribution: 1500 },
    { lowerBound: 90000, upperBound: 99999, contribution: 1600 },
    { lowerBound: 100000, upperBound: Infinity, contribution: 1700 } 
];

const NSSFThreshold = 1800;
const NSSFContribution = 200;

function calculatePayeeTax(basicSalary) { 
    let taxPayable = 0; 
    let remainingSalary = basicSalary; 
    
    for (const { lowerBound, upperBound,rate} of taxrate) {
        const taxableAmount = Math.min(remainingSalary, upperBound) - lowerBound; 
        if (taxableAmount <= 0) break; taxPayable += (taxableAmount * rate) / 100; 
        remainingSalary -= taxableAmount; 
    } 
    return taxPayable; 
} 
function calculateNHIF(basicSalary) {
     for (const { lowerBound, upperBound, contribution } of NHIFThresholds) {
       if (basicSalary >= lowerBound && basicSalary <= upperBound) { 
        return contribution; 
    } 
}
     return NHIFThresholds[NHIFThresholds.length - 1].contribution; 
    } 
    function calculateNSSF(basicSalary) { 
        return basicSalary >= NSSFThreshold ? NSSFContribution : 0; 
    } 
    function calculateNetSalary(basicSalary, benefits) { 
        const payeeTax = calculatePayeeTax(basicSalary); 
        const NHIFContribution = calculateNHIF(basicSalary); 
        const NSSFContribution = calculateNSSF(basicSalary); 

        const deductions = payeeTax + NHIFContribution + NSSFContribution; 
        const netSalary = basicSalary + benefits - deductions; 
        
        return { 
            basicSalary, 
            benefits, 
            payeeTax, 
            NHIFContribution, 
            NSSFContribution, 
            deductions, netSalary 
        }; 
    }
    
    // Example usage: 
    const basicSalary = 60000; 
    const benefits = 150000; 
    const salaryDetails = calculateNetSalary(60000,150000); 
    console.log(60000);
