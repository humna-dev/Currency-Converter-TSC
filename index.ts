#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

let myBalance = 50000; //Dollars
let myPin = 6767;

console.log(chalk.yellowBright("Welcome to my ATM Machine!"));

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: chalk.red("Enter your Pin"),
            type: "number"
        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log(chalk.bgBlueBright("Correct pin Code!!!"));

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: chalk.greenBright("Please Select Option"),
                type: "list",
                choices: ["Withdraw", "Check Balance", "Fast Cash", "Exit"]

            }
        ]
    );

    if(operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: chalk.cyan("Enter the amount to withdraw"),
                    type: "number"
                }
            ]
        );








        

        if(amountAns.amount > myBalance){
            console.log(chalk.red("Insufficient Balance!"));
            
        } else {
            myBalance -= amountAns.amount;
            console.log(chalk.green(`Your remaining balance is: ${myBalance}`));
        }
        
        
    }
 
else if(operationAns.operation === "Check Balance"){
        console.log(chalk.green(`Your balance is: ${myBalance}`));
}
else if(operationAns.operation === "Fast Cash"){
        let fastCash = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: chalk.cyan("Select an amount for Fast Cash "),
                    type: "list",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]
        );
    git 
        myBalance -= fastCash.amount;
        console.log(chalk.green(`Your remaining balance is: ${myBalance}`));
    } else if(operationAns.operation === "Exit"){
        console.log(chalk.gray("Thank you for using my ATM Machine. Goodbye!"));
        process.exit();
    }
} else {
    console.log(chalk.red("Incorrect pin code!!"));
}
