var firstname = prompt ('First Name: ')
var lastNAme = prompt ('Last Name: ')
var MiddleInitial = prompt ('Middle Name: '). slice(0,1)
var daysofwork = prompt ('Days Of Work: ')
var hoursofwork = daysofwork * 8 
var dailySalary = 8 * 610
var grossSalary = daysofwork * dailySalary
var tax = grossSalary * .1
var netSalary = grossSalary - tax

alert(
     lastNAme + ',' + firstname + ' ' + MiddleInitial + '.\n' +
     'Total Work Days: ' + daysofwork + '\n' +
     'Total Work Hour: ' + hoursofwork + '\n' +
     'Gross Salary: ' + grossSalary + '\n' +
     'Net Salary: ' + netSalary + '\n' +
    'Tex : ' + tax

)