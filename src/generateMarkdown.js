// Create a reusable function that generates new paragraph content
const generateMarkdownSection = (dataArray, templateFunction, sectionHeader) => {
  // Return an empty string if there are no descriptions
  if (!dataArray || dataArray.length == 0) {
    return '';
  }

  // Initialize an empty string to store the markdown in
  let sectionMarkdown = '';

  // Concatenate the Section Header
  sectionMarkdown += `## ${sectionHeader}\n`

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

const generateTableOfContents = (readmeData) => {
  let tableOfContents = '## Table of Contents \n';

  // If applicable, generate description
  // If applicable, generate user story
  // If applicable, generate resources used
  // If applicable, generate usage
  // If applicable, generate contributors
  // If applicable, generate contact info

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

  ${generateMarkdownSection(readmeData.description, generateDescriptionMD, 'Description')}

  ${generateMarkdownSection(readmeData.userStory, generateStoryMD, 'User Story')}

  ${generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed, 'Resources Used')}

  ${generateMarkdownSection(readmeData.usage, generateUsage, 'Usage')}

  ${generateMarkdownSection(readmeData.contributors, generateContributors, 'Contributors')}

  ${generateMarkdownSection(readmeData.contactInfo, generateContactInfo, 'Contact Information')}`;
}