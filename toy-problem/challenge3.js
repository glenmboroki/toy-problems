// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// NB: Use KRA, NHIF, and NSSF values provided in the link below.

// The program should be run in the console
function getIncome(basic, benefits) {
    return (basic + benefits);
}

function netIncome(basic, benefits) {
    //declarig income, payee netsalary and nhifdeductions variabless
    let income;
    let payee;
    let netSalary;
    let nhifDeductions;

    income = getIncome(basic, benefits);

    // NHIF deductions
    if (income < 5999) {
        nhifDeductions = 150
    } else if (income >= 6000 && income <= 7999) {
        nhifDeductions = 300

    } else if (income >= 8000 && income <= 11999) {
        nhifDeductions = 400

    } else if (income >= 12000 && income <= 14999) {
        nhifDeductions = 500

    } else if (income >= 15000 && income <= 19999) {
        nhifDeductions = 600

    } else if (income >= 20000 && income <= 24999) {
        nhifDeductions = 750

    } else if (income >= 25000 && income <= 29999) {
        nhifDeductions = 850

    } else if (income >= 30000 && income <= 34999) {
        nhifDeductions = 900

    } else if (income >= 35000 && income <= 39999) {
        nhifDeductions = 950

    } else if (income >= 40000 && income <= 44999) {
        nhifDeductions = 1000

    } else if (income >= 45000 && income <= 49999) {
        nhifDeductions = 1100

    } else if (income >= 50000 && income <= 54999) {
        nhifDeductions = 1200

    } else if (income >= 60000 && income <= 69999) {
        nhifDeductions = 1300

    } else if (income >= 70000 && income <= 79999) {
        nhifDeductions = 1400

    } else if (income >= 80000 && income <= 89999) {
        nhifDeductions = 1500

    } else if (income >= 90000 && income <= 99999) {
        nhifDeductions = 1600

    } else if (income >= 100000) {
        nhifDeductions = 1700

    }



    // The sh.400 is the amount deducted for nssf deductions
    // Calculation of Payee taxable amount
    // netSalary when income is below 24,000
    if (income <= 24000) {
        // Calculation of Payee taxable amount
        payee = income * 0.1
        netSalary = income - payee - 400 - nhifDeductions
        console.log('NHIF deductions are:' + nhifDeductions)
        console.log("Net salary is: " + netSalary.toFixed(2))

    }
    // netSalary when income is between 24,301 and 32,333
    else if (income >= 24001 && income <= 32333) {
        // Calculation of Payee taxable amount
        payee = (income * 0.25);
        netSalary = income - payee - 400 - nhifDeductions;
    }
    // netSalary when income  is above 32,333
    else if (income > 32333) {
        // Calculation of Payee taxable amount
        payee = (income * 0.30);
        netSalary = income - payee - 400 - nhifDeductions;
    }
    //output of the calculations
    console.log("Payee is :" + payee)
    console.log('NHIF deductions are:' + nhifDeductions)
    console.log("Net salary is: " + netSalary.toFixed(2))

}
//calling a  neticome function
netIncome(200000, 23450);