import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptResourcesUsed = async (readmeData) => {
    if (!readmeData.resourcesUsed) {
        readmeData.resourcesUsed = [];
    }

    console.log(`
        =======================
        Include Your Resources!
        =======================
    `);

    console.log(`Provide any resources used for your project.`)

    const resourcesQuestions = [
        {
            // Data Input
            type: 'input',
            name: 'resourcesText',
            message: 'Provide your resource:',
            validate: resourcesText => resourcesText ? true : 'Please provide a resource you used!',
        },
        {
            // Prompt user if they want to add another resource
            type: 'confirm',
            name: 'confirmAddResource',
            message: 'Would you like to include another resource?',
            default: false,
        }
    ];

    // While true keep looping through the function.
    while (true) {
        const userResourcesData = await inquirer.prompt(resourcesQuestions);

        // Create an object to store the description data
        const userResourceObject = {
            resource: userResourcesData.resourcesText,
        };

        readmeData.resourcesUsed.push(userResourceObject);

        console.log(userResourceObject);

        // Exit out of the loop when false
        if (!userResourcesData.confirmAddResource) {
            break;
        }
    }

    return readmeData;
};