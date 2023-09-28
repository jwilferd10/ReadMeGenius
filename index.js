import { inquirer } from inquirer;
import { generateMarkdown } from ('./src/generateMarkdown.js');
import { questions } from ('./src/promptUser.js');
import { writeToFile } from './utils/writeFile.js';

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();