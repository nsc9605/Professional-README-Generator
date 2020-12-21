// Require files for info
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
        {
            type: "input", 
            message: "What is the name of your Project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required to install this project?",
            name: "installation"
        },
        {
            type: "input",
            message: "How would you like your project to be used?",
            name: "usage"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the project?",
            name: "contribution"
        },
        {
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache 2.0",
                "MIT",
                "GPL 3.0",
                "ISC",
                "BSD 3",
                "None"
            ],
            name: "license"
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be used to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "test",
            message: "What command is required to run tests?",
            default: "npm test"
        },
        {

        }

    ])
}
const questions = [
{
    type: "input", 
    message: "What is the name of your Project?",
    name: "title"
}
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// function call to initialize program
init();
