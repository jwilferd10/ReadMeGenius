import inquirer from 'inquirer';

export const promptContributors = async (readmeData) => {
    if (!readmeData.contributors) {
        readmeData.contributors = [];
    }

    console.log(`
        =================
        Add Contributors!
        =================
    `);

    console.log(`
        Provide a contributors list and highlight people helping with this project!
        ---------------------------------------------------------------------------
    `);
    
    const contributorsQuestions = [
        {
            // Contributors name input
            type: 'input',
            name: 'contributorsText',
            message: 'Please provide a name of an individual or organization:',
            validate: contributorsText => contributorsText ? true : 'Please provide a name!',
        },
        {
            // Prompt user if they want to add another name
            type: 'confirm',
            name: 'confirmAddContributor',
            message: 'Would you like to include another name?',
            default: false,
        }
    ];

    // While true keep looping through the function.
    while (true) {
        const contributorsData = await inquirer.prompt(contributorsQuestions);

        // Create an object to store the data
        const contributorsObject = {
            text: contributorsData.contributorsText,
        };

        readmeData.contributors.push(contributorsObject);

        // Exit out of the loop when false
        if (!contributorsData.confirmAddContributor) {
            break;
        }
    }

    return readmeData;
};