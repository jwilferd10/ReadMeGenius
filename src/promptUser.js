import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptUser = () => {
    return inquirer.prompt([
        {
            // File Name
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInput => titleInput ?  true : 'Please provide a title for the file!',
        },
        {
            // Confirm file Subtitle (Optional)
            type: 'confirm',
            name: 'fileTitle',
            message: 'Would you like to include a subtitle underneath your file name?',
            default: true,
        },
        {
            // Prompt subtitle iput
            type: 'input',
            name: 'subtitleText',
            message: 'Enter your desired subtitle:',
            when: ({ fileTitle }) => fileTitle,
        },
        {
            // File Description
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => descriptionInput ? true : 'Please provide a description for your file!',
        },
        {
            // User Story (Optional)
            type: 'confirm', 
            name: 'userStory',
            message: 'Would you like to provide a User Story for this file??',
            default: true,

            // Create the code that'd prompt user these questions
        }, 
        {
            // Resources Used (Optional)
            type: 'confirm',
            name: 'confirmResourcesUsed',
            message: 'Would you like to highlight any resources used?',
            default: true,
        },
        // {
            // // Resources Used
            // type: 'input',
            // name: 'resourcesUsed',
            // message: 'How do you install your project? (Required)',
            // validate: installationInput => {
            //     if (installationInput) {
            //         return true;
            //     } else {
            //         console.log('You need to provide installation info to continue!');
            //         return false;
            //     }
            // }
        // },
        // {
        //     // Usage Information
        //     type: 'input',
        //     name: 'usage',
        //     message: 'How do you use this project? (Required)',
        //     validate: usageInput => {
        //         if (usageInput) {
        //             return true;
        //         } else {
        //             console.log('You need to provide information on how to use project!');
        //             return false;
        //         }
        //     }
        // },
        // {
        //     // Contribution Guidlines
        //     type: 'input',
        //     name: 'contribution',
        //     message: 'How should people contribute to this project? (Required)',
        //     validate: contributionInput => {
        //         if (contributionInput) {
        //             return true;
        //         } else {
        //             console.log('You need to provide information on how to contribute to the project!');
        //             return false;
        //         }
        //     }
        // },
        // // Test Instructions 
        // {
        //     type: 'input',
        //     name: 'testing',
        //     message: 'How do you test this project? (Required)',
        //     validate: testingInput => {
        //         if (testingInput) {
        //             return true;
        //         } else {
        //             console.log('You need to describe how to test this project!');
        //             return false;
        //         }
        //     }
        // },
        // Github Username
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        // Email Address
        {
            type: 'input',
            name: 'email',
            message: 'Would you like to include your email?',
        },
    ]);
};
