#! usr/bin/env node

import inquirer from "inquirer";

const randomNumber1 =Math.floor(Math.random()* 6 + 1);

//const randomNumber = 10;
const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1 to 6:",
 }
]);
 if (answer.userGuessedNumber === randomNumber1){
    console.log("Congratulations!!!You guessed it correct.")
 }else {
    console.log("Oops!,You guessed the wrong number.")
 }