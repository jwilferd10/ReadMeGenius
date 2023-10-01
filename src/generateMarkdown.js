// Create a reusable function that generates new paragraph content
const generateMarkdownSection = (dataArray, templateFunction) => {
  // Return an empty string if there are no descriptions
  if (!dataArray || dataArray.length == 0) {
    return '';
  }

  // Initialize an empty string to store the markdown in
  let sectionMarkdown = '';

  // Loop through the array and generate markdown for each sub-section
  dataArray.forEach((data) => {
    // Concatenate the markdown sub-sections
    sectionMarkdown += templateFunction(data);
  })

  return sectionMarkdown;
}

// Generates the Description section
const generateDescriptionMD = (descriptionData) => {
  return `
    ## ${descriptionData.header}
    ${descriptionData.text}
  `;
};

// Create a function that returns the userStory 
const generateStoryMD = (userStoryData) => {
  return `
    - ${userStoryData.when}
      - ${userStoryData.then}
  `;
};


// Create a function that returns resourcesUsed
const generateResourcesUsed = (resourcesUsedData) => {
  return `
    - ${resourcesUsedData.resource}
  `;
};

const generateUsage = (usageData) => {
  return `
    ${usageData.usageText}
  `;
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

  ## Description
  ${generateMarkdownSection(readmeData.description, generateDescriptionMD)}

  ## User Story
  ${generateMarkdownSection(readmeData.userStory, generateStoryMD)}

  ## Resources Used
  ${generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed)}

  ## Usage:
  ${generateMarkdownSection(readmeData.usage, generateUsage)}

  ## Contribution:
  ${readmeData.contribution}

  ## Testing:
  ${readmeData.testing}

  ## Additional Info:
  - Github: [${readmeData.github}](https://github.com/${readmeData.github})
  - Email: ${readmeData.email} `;
}