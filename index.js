// Require files for info
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./util/generateMarkdown');


// array of questions for user
const questions = [

        {
            type: "input",
            name: "title",
            message: "What is the name of your Project?",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a detailed description of your project and provide any steps necessary.",
        },
        {
            type: "input",
            name: "installation",
            message: "What should the user install to run this application? (any dependencies)?",
            default: "npm i",
        },
        {
            type: "input",
            name: "usage",
            message: "How would you like your application to be used?",
        },
        {
            type: "input",
            name: "contribution",
            message: "Did anyone else contribute to this project? (provide github usernames)",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "GNU",
                "GPL",
                "ISC",
                "BSD",
                "None",
            ]
        },
        {
            type: "input",
            name: "tests",
            message: "What command is required to test this app?",
            default: "npm test",
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
    ];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!");
        }
    })
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log("Generating README...");
        writeToFile("README.md", generateMarkdown(data));
    })
}

// function call to initialize program
init();
