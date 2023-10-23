import inquirer from 'inquirer';

// Array of questions to ask the user
export const promptUserStory = async (readmeData) => {
    if (!readmeData.userStory) {
        readmeData.userStory = [];
    }

    console.log(`
        ====================
        Create a User Story!
        ====================
    `);

    console.log(`
    A "WHEN" statement in a user story specifies the triggering action, while a "THEN" statement describes the expected outcome
    ---------------------------------------------------------------------------------------------------------------------------
    `);

    const userStoryQuestions = [
        {
            // When input
            type: 'input',
            name: 'whenText',
            message: 'Provide a WHEN statement for this section:',
            validate: whenText => whenText ? true : 'Please provide an input for this section!',
        },
        {
            // Then input
            type: 'input',
            name: 'thenText',
            message: 'Provide a THEN statement for this section:',
            validate: thenText => thenText ? true : 'Please provide an input for this section!',
        },
        {
            // Prompt user if they want to add another paragraph
            type: 'confirm',
            name: 'confirmAddUserStory',
            message: 'Would you like to include another WHEN/THEN statement in your description?',
            default: false,
        }
    ];

    // While true keep looping through the function.
    while (true) {
        const userStoryData = await inquirer.prompt(userStoryQuestions);

        // Create an object to store the description data
        const userStoryObject = {
            when: userStoryData.whenText,
            then: userStoryData.thenText,
        };

        readmeData.userStory.push(userStoryObject);

        // Exit out of the loop when false
        if (!userStoryData.confirmAddUserStory) {
            break;
        }
    }

    return readmeData;
};