import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptUsage = async (readmeData) => {
    if (!readmeData.usage) {
        readmeData.usage = [];
    }

    console.log(`
        =================================
        Describe How To Use Your Project!
        =================================
    `);

    console.log(`
        Creating a 'Usage' section will help people easily use your project.
        -------------------------------------------------------------------
    `);

    const usageQuestions = [
        {
            // Data Input
            type: 'input',
            name: 'usageText',
            message: 'Provide a description on how to use your project:',
            validate: resourcesText => resourcesText ? true : 'Please provide some details!',
        },
        {
            // Prompt user if they want to add another paragraph
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to add another paragraph?',
            default: false,
        }
    ];

    // While true keep looping through the function.
    while (true) {
        const userUsageData = await inquirer.prompt(usageQuestions);

        // Create an object to store the description data
        const userUsageObject = {
            usageText: userUsageData.usageText,
        };

        readmeData.usage.push(userUsageObject);

        // Exit out of the loop when false
        if (!userUsageData.confirmUsage) {
            break;
        }
    }

    return readmeData;
};