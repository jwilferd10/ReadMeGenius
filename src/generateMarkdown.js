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

// Function to generate Usage markdown
const generateUsage = (usageData) => {
  return `
    ${usageData.usageText}
  `;
}

// Function to generate contributors list.
const generateContributors = (contributorsData) => {
  return `
    - ${contributorsData.text}
  `;
}

const generateContactInfo = (contactInfoData) => {
  return `
    - GitHub: [${contactInfoData.name}](https://github.com/${contactInfoData.name})
      - Email: ${contactInfoData.email}
  `;
}

// function to generate markdown for README
export const generateMarkdown = (readmeData) => {
  return `# ${readmeData.title}

  ## Table of Contents 
  - [Description](#description)
  - [User Story](#user-story)
  - [Resources Used](#resources-used)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Contact Information](#contact-information)

  ## Description
  ${generateMarkdownSection(readmeData.description, generateDescriptionMD)}

  ## User Story
  ${generateMarkdownSection(readmeData.userStory, generateStoryMD)}

  ## Resources Used
  ${generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed)}

  ## Usage:
  ${generateMarkdownSection(readmeData.usage, generateUsage)}

  ## Contribution:
  ${generateMarkdownSection(readmeData.contributors, generateContributors)}

  ## Contact Information:
  ${generateMarkdownSection(readmeData.contactInfo, generateContactInfo)}
  
  `;
}