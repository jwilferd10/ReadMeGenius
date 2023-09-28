// Imports
import { generateMarkdown } from './src/generateMarkdown.js';
import { promptUser } from './src/promptUser.js';
import { writeToFile } from './utils/writeFile.js';

const initializeApp = async () => {
    try {
        // Let userResponse be what promptUser collects
        const userResponse = await promptUser();

        // Write userResponse to the file
        await writeToFile(userResponse);

        console.log('README File successfully generated.');
    } catch (error) {
        console.error('An error occured:', error.message);
    }
}

initializeApp();