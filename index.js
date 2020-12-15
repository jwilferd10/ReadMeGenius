// First and foremost ensure that npm is installed and ready to go and that inquirer up and running
// Then we'll want to prepare our global require's
// Then work on the list of questions we'll ask the users. Try to play around with input or checkboxes and see how that'll turn out
// Somewhere nearing the final stages of this project is setting up the 


// Global require's
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js')

// Array of questions to ask the user
const promptQuestions = () => {
    console.log(`
    =================
    Add README Info
    =================
    `);
    
    return inquirer.prompt([   
        {
            // Title
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Description
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Installation Instructions
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Usage Information
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Contribution Guidlines
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Test Instructions
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Checkbox, License Options
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Github Username (Contained in the section titled Questions, links to github profile)
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Email Address (Contained in the section titled Questions)
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            // Table of Contents (Will Require Work)
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);    
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(promptQuestions)
}

// function call to initialize program
init();
