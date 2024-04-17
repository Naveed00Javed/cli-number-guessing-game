#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\wellcome to codewithNaveed - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuesedNumber",
        type: "number",
        message: "Enter your Geuess Number(Nmber limit from 1 to 5):",

    },


]);

if (answer.userGuesedNumber === randomNumber){
    console.log("Congratulation ! You Guess a correct Number.")
}
else{
    console.log("Sorry, You Guess a wrong Number");
}