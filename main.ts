#! usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1234;

console.log("Welcome to ATM machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin code ",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct, Login Succesfully!!!");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices:["Withdraw Amount","Check Balance"],
        }
    ]);

if(operationAns.operation === "Withdraw Amount") {
   let withdrawAns = await inquirer.prompt([
    {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdrawal method:",
        choices: ["Fast Cash", "Enter Amount"]
    }
   ])
   if(withdrawAns.withdrawMethod === "Fast Cash"){
    let fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            message: "Select Amount:",
            choices: [500, 1000, 5000, 10000, 20000, 50000]
        }
    ])
    if(fastCashAns.fastCash > myBalance){
        console.log("Insufficient Balance");
    }
    else{
        myBalance -= fastCashAns.fastCash
        console.log(`${fastCashAns.fastCash} Withdraw Sucessfully!!!`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }

   }
   else if(withdrawAns.withdrawMethod === "Enter Amount"){
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw:"
        }
       ]);
       if (amountAns.amount > myBalance){
        console.log("Insufficient Balance");
       }
       else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw successfully!!!`)
        console.log("Your Remaining balance is: " + + myBalance);
       }
   }
}
   else if(operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`);
} 
}else{
    console.log("Pin is Incorrect, Please try again!!");
}
 
