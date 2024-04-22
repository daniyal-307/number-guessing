#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let rounds = 0;
let score = 0;
let condition = true;


while (condition) {
    // Ask user the number of rounds they want to play
    const { noOfRounds }: {
        noOfRounds: number
    } = await inquirer.prompt([
        {
            type: "number",
            name: "noOfRounds",
            message: chalk.blueBright("Please type the number of rounds you want to play?")
        }
    ]);

    rounds = noOfRounds;

    // start loop to run the game according to the number of rounds
    for (let round = 1; round <= noOfRounds; round++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;

        //ask user to guess a number    
        const { userGuess }: {
            userGuess: number
        } = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: chalk.yellowBright(`Round:${round}, Please guess a number between 1 and 5?`)
            }
        ])

        if (userGuess == randomNumber) {
            console.log(chalk.greenBright("Congratulations you guessed the correct number"));
            score++;
        } else {
            console.log(chalk.redBright(`Oops you guessed it wrong, the correct number was ${randomNumber}`));
        }
    };

    console.log(chalk.gray(`Game over, Your score is ${score} out of ${rounds}`));

    //ask user whether they wish to play again or not
    const { startAgain }: {
        startAgain: boolean
    } = await inquirer.prompt([
        {
            type: "confirm",
            name: "startAgain",
            default: "true",
            message: chalk.cyanBright("Do you wish to play again?")
        }
    ])

    condition = startAgain;

};