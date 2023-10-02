// Imports
import { generateMarkdown } from './src/generateMarkdown.js';
import { promptUser } from './src/promptUser.js';
import { writeToFile } from './utils/writeFile.js';
import { promptDescription } from './src/promptDescription.js'
import { promptUserStory } from './src/promptUserStory.js';
import { promptResourcesUsed } from './src/promptResourcesUsed.js';
import { promptUsage } from './src/promptUsage.js';
import { promptContributors } from './src/promptContributors.js'

const initializeApp = async () => {
    try {
        // Let userResponse be what promptUser collects
        let userResponse = await promptUser();

        // Run promptDescription if userResponse is true
        if (userResponse.confirmDescription) {
            userResponse = await promptDescription(userResponse);
        }

        if (userResponse.confirmUserStory) {
            userResponse = await promptUserStory(userResponse);
        }

        if (userResponse.confirmResourcesUsed) {
            userResponse = await promptResourcesUsed(userResponse);
        }

        if (userResponse.confirmUsage) {
            userResponse = await promptUsage(userResponse);
        }

        if(userResponse.confirmContributors) {
            userResponse = await promptContributors(userResponse);
        }

        // Generate the README using userResponse data
        const fileContent = generateMarkdown(userResponse);

        // Write userResponse to the file
        await writeToFile(fileContent);


        console.log('README File successfully generated.');
    } catch (error) {
        console.error('An error occured:', error.message);
    }
}

initializeApp();