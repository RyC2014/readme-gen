// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project here:'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your software installed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have?",
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Where can people contribute to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your software?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
