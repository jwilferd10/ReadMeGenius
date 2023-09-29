import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptDescription = async (readmeData) => {
    if (!readmeData.description) {
        readmeData.description = [];
    }

    console.log(`
        ===================
        Description Section
        ===================
    `);

    const descriptionQuestions = [
        {
            // Description Header
            type: 'input',
            name: 'descriptionHeader',
            message: 'Provide a header text',
            validate: descriptionHeader => descriptionHeader ? true : 'Please provide a header for this section!',
        },
        {
            // Description Text
            type: 'input',
            name: 'descriptionText',
            message: 'Provide a description for your file',
            validate: descriptionText => descriptionText ? true : 'Please provide a description for your file!',
        },
        {
            // Prompt user if they want to add another paragraph
            type: 'confirm',
            name: 'confirmAddDescription',
            message: 'Would you like to include another paragraph in your description?',
            default: false,
        }
    ];

    // While true keep looping through the function.
    while (true) {
        const descriptionData = await inquirer.prompt(descriptionQuestions);
        

        // console.log(readmeData);

        // Collect the data
        readmeData.description.push({
            header: descriptionData.descriptionHeader,
            text: descriptionData.descriptionText,
        });
        
        // Exit out of the loop when false
        if (!descriptionData.confirmAddDescription) {
            break;
        }
    }

    return readmeData;
};
