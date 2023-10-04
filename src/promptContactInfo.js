import inquirer from 'inquirer';

export const promptContactInfo = async (readmeData) => {
    if (!readmeData.contactInfo) {
        readmeData.contactInfo = [];
    }

    console.log(`
        ===================
        Contact Information
        ===================
    `);

    const contactInfoQuestions = [
        {
            // Github Username
            type: 'input',
            name: 'githubName',
            message: 'Enter your GitHub Username (Required)',
            validate: githubName => githubName ? true : 'Please provide a GitHub Username!',
        },
        {
            // Email Address
            type: 'input',
            name: 'email',
            message: 'Provide an email address!',
            validate: githubName => githubName ? true : 'Please provide an email!',
        },
        {
            // Prompt user if they want to add another contact info
            type: 'confirm',
            name: 'confirmAddContactInfo',
            message: 'Would you like to include another person?',
            default: false,
        }
    ];

    // While true keep looping through the function
    while (true) {
        const contactInfoData = await inquirer.prompt(contactInfoQuestions);

        // Create an object and store the data within it.
        const contactInfoObject = {
            name: contactInfoData.githubName,
            email: contactInfoData.email
        };

        readmeData.contactInfo.push(contactInfoObject);

        // Exit out of the loop when false
        if(!contactInfoData.confirmAddContactInfo) {
            break;
        }
    }

    return readmeData;
}