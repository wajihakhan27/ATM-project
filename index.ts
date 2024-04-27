#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let myBalance: number = 100000;
let pinCode: number = 2324;

console.log(chalk.yellow.underline("\n\t WELCOM TO THE ATM \n"));

let pinAnswer = await inquirer.prompt(
  [
     {
         name: "pinNumber",
         message:chalk.cyanBright( "Please Enter Your PIN Code :"),
        type: "number",
     },
]
);
if (pinAnswer.pinNumber === pinCode) {
  console.log(chalk.bold.magentaBright("\tSuccessful Login\t"));
    
  // select the action that you perform
  let operationAnswer = await inquirer.prompt([
    {
       name: "operations",
       message: chalk.cyanBright("Please Select From The Options Below"),
       type: "list",
       choices: ["Cash Withdrawal","Balance Inquiry","Funds Transfer","Fast Cash"],
    },
]);
// to select the withdrawl 
if (operationAnswer.operations === "Cash Withdrawal"){
  let operationAmount = await inquirer.prompt(
    [
      { name:"amount",
      message:chalk.cyanBright("Please Enter Amount:"),
      type:"number",
      },
  ]
  );
  // to withdrawl the funds
if (operationAmount.amount > myBalance) 
       {console.log(chalk.bold("Insufficient funds. Please enter a lower amount or check your account balance"));}
else { myBalance -= operationAmount.amount  
       console.log(chalk.bold(` Withdrawal Successfully \n your remaining amount balance is: ${myBalance}\n`)); }   
};
// to check the balance only

if (operationAnswer.operations === "Balance Inquiry")
{console.log(chalk.bold(` Your Account Balance is: ${myBalance}`));};

// to transfer the funds according to the options and given the amount that you want to transfer
if (operationAnswer.operations === "Funds Transfer"){
let operationFunds = await inquirer.prompt([
  {
  name:"bank",
  message:chalk.cyanBright("Please Select the Bank"),
  type:"list",
  choices:["UBL","HBL","EasyPaisa"]
  },
  {                                        // pin code given
    name:"pin",
    message:chalk.cyanBright(" Enter your PIN:"),
    type:"number",
   },
   {                                      // account number of the person that you want to tranfer the money
    name:"account",
    message:chalk.cyanBright(" Please enter account number which you want to transfer:"),
    type:"number",
   },
   {                                    // amount to tranfer
    name:"amount",
    message:chalk.cyanBright(" Please enter amount:"),
    type:"number",
   }
])

if(operationFunds.amount > myBalance){
console.log(chalk.bold("Insufficient funds. Please enter a lower amount or check your account balance"));}
else {
   myBalance -= operationFunds.amount
   console.log(chalk.bold("Your Transaction has been completed successfully..!"));
   console.log(chalk.bold(` Your Remaining Balance is: ${myBalance}`));
 }
}
// to use the fast cash option according to operations
if(operationAnswer.operations === "Fast Cash"){
let operationFastCash  = await inquirer.prompt([
{
  name:"fastcash",
  message:chalk.cyanBright("Please Select the Amount Below"),
  type:"list",
  choices:["500","1000","5000","10000","20000","25000"]
},
]);
if(operationFastCash.fastcash === "500" )
  {  myBalance -= 500 ;
    console.log(chalk.bold(` Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
else if (operationFastCash.fastcash === "1000" )
  {   myBalance -= 1000 ;
      console.log( chalk.bold(`Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
else if (operationFastCash.fastcash === "5000" )
  {   myBalance -= 5000 ;
      console.log(chalk.bold(`Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
else if (operationFastCash.fastcash === "10000" )
  {   myBalance -= 10000 ;
      console.log(chalk.bold(`Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
else if (operationFastCash.fastcash === "20000" )
  {   myBalance -= 20000 ;
     console.log(chalk.bold(`Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
else  { 
      operationFastCash.fastcash === "25000" 
       myBalance -= 25000 ;
      console.log(chalk.bold(` Successful Withdrawl..!\n Your remining balance is:${myBalance}\n`));}
}

}
  else {
     console.log(chalk.bold.magenta("\t Incorrect Pin Code \t"));
     console.log(chalk.bold.magenta(" \t Plz Try Again \t "));
};






