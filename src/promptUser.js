import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptUser = () => {

    console.log(`
        ===================================================
        Thanks for using the Professional Readme Generator!
        ===================================================
    `);

    console.log("Let's start with a few questions:")
    return inquirer.prompt([
        {
            // File Name (Required)
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInput => titleInput ?  true : 'Please provide a title for the file!',
        },
        {
            // Confirm file Subtitle (Optional)
            type: 'confirm',
            name: 'subTitle',
            message: 'Would you like to include a subtitle underneath your file name?',
            default: true,
        },
        {
            // Prompt subtitle iput
            type: 'input',
            name: 'subtitleText',
            message: 'Enter your desired subtitle:',
            when: ({ subTitle }) => subTitle,
        },
        {
            // File Description (Required)
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to include a Description for your file?',
            default: true,
        },
        {
            // User Story (Optional)
            type: 'confirm', 
            name: 'confirmUserStory',
            message: 'Would you like to provide a User Story for this file?',
            default: true,
        }, 
        {
            // Resources Used (Optional)
            type: 'confirm',
            name: 'confirmResourcesUsed',
            message: 'Would you like to highlight any Resources Used?',
            default: true,
        },
        {
            // Usage
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to include a Usage section?',
            default: true,
        },
        {
            // Contributors
            type: 'confirm',
            name: 'confirmContributors',
            message: 'Would you like to include a Contributors list?',
            default: true,
        },
        {
            // Contact Information
            type: 'confirm',
            name: 'confirmContactInfo',
            message: 'Would you like to include any Contact Information?',
            default: true,
        }
    ]);
};
