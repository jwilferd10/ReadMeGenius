// Create a reusable function that generates new paragraph content
const generateDescriptionMD = (descriptionArray) => {
  // Return an empty string if there are no descriptions
  if (!descriptionArray || descriptionArray.length == 0) {
    return '';
  }
  
  // Initialize an empty string to store the markdown in
  let descriptionMarkdown = '';
  
  // Loop through the description array and generate markdown for each sub-section
  descriptionArray.forEach((descriptionData) => {
    // Concatenate the markdown sub-sections
    descriptionMarkdown += `
      ## ${descriptionData.header}
      ${descriptionData.text}
    `;
  });

  return descriptionMarkdown;
};

// Create a function that returns the userStory 
const generateStoryMD = (userStoryArray) => {
  if (!userStoryArray || userStoryArray.length == 0) {
    return '';
  }

  let userStoryMarkdown = '';

  userStoryArray.forEach((userStoryData) => {
    userStoryMarkdown += `
      - ${userStoryData.when}
        - ${userStoryData.then}
    `;
  });

  return userStoryMarkdown;
}

// function to generate markdown for README
export const generateMarkdown = (readmeData) => {
  return `# ${readmeData.title}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${generateDescriptionMD(readmeData.description)}

  ## User Story
  ${generateStoryMD(readmeData.userStory)}

  ## Installation:
  ${readmeData.installation}

  ## Usage:
  ${readmeData.usage}

  ## Contribution:
  ${readmeData.contribution}

  ## Testing:
  ${readmeData.testing}

  ## Additional Info:
  - Github: [${readmeData.github}](https://github.com/${readmeData.github})
  - Email: ${readmeData.email} `;
}