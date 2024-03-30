#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.bold.greenBright("=================================To Do List ========================================"));
let extraArray = [];
let continueProject = true;
while (continueProject) {
    //All Options
    let addTask = await inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "What would you like to do?",
            choices: ["Enter 'New' to add in list", "Enter 'List' to display list", "Enter 'Delete' to delete from list", "Enter 'Quit' to close the application "]
        },
    ]);
    //New Option
    if (addTask.choices === "Enter 'New' to add in list") {
        let addNewTask = await inquirer.prompt([
            {
                type: "string",
                name: "new",
                message: "Enter new to do?"
            }
        ]);
        extraArray.push(addNewTask.new);
        let firstWord = addNewTask.new.slice(0, 1);
        let upperCase = firstWord.toUpperCase();
        let remainingWords = addNewTask.new.slice(1);
        let lowerCase = remainingWords.toLowerCase();
        let concatenate = upperCase + lowerCase;
        console.log(chalk.bold.yellowBright(extraArray.indexOf(addNewTask.new) + ")" + " " + concatenate + " is added in the list."));
    }
    //List
    else if (addTask.choices === "Enter 'List' to display list") {
        for (let item of extraArray) {
            console.log(chalk.bold.yellowBright(extraArray.indexOf(item) + ") " + item + " added in the list"));
        }
        if (extraArray[0] === undefined) {
            console.log(chalk.bold.greenBright("================================================="));
            console.log(chalk.bold.greenBright("\n                   No Entries"));
            console.log(chalk.bold.greenBright("================================================="));
        }
    }
    //Delete
    else if (addTask.choices === "Enter 'Delete' to delete from list") {
        let deleteTask = await inquirer.prompt([
            {
                type: "number",
                name: "delete",
                message: "Enter index number you want to delete?"
            }
        ]);
        let deleteIndexNo = extraArray.splice(deleteTask.delete, 1);
        console.log(chalk.bold.yellowBright(deleteIndexNo + " delete from list"));
    }
    else {
        break;
    }
}
console.log(chalk.bold.greenBright("\n\n================================Thanks for using this application============================"));
// let a = addNewTask.add;
// let b = a.slice(0, 1)
// let c = b.toUpperCase();
// let d = a.slice(1)
// let concatenate = c + d
// console.log(index + ")" + " " + concatenate + " is added in the list.");
