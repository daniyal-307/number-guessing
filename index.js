#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function gameQuestion() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let answer = await inquirer.prompt([
        {
            name: "chooseNumber",
            type: "number",
            message: chalk.yellowBright("Please select a number between 1-5:")
        }
    ]);
    if (answer.chooseNumber === randomNumber) {
        console.log(chalk.greenBright("Congratulations you won"));
    }
    else {
        console.log(chalk.redBright(`You Lost, The number was: ${chalk.gray(randomNumber)}`));
    }
}
;
do {
    await gameQuestion();
    var again = await inquirer.prompt([
        {
            name: "restart",
            type: "list",
            choices: ["Yes", "NO"],
            message: "Do you wish to play again?"
        }
    ]);
} while (again.restart === "Yes");
