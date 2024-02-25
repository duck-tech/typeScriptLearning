// function calculateTax(income: number, taxYear?: number): number {
//     if ((taxYear || 2022) < 2022) 
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000)


function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) 
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000)