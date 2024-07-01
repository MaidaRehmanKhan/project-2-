#! /url/bin/env node
import inquirer from "inquirer";
let todos = [""];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo?",
        },
        {
            type: "conform",
            name: "addmore",
            message: "do you want to add more todo?",
            default: false
        },
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
    console.log(todos);
    if (todos.length > 0) {
        console.log("your Todo list: ");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("Not Todos Found");
    }
}
