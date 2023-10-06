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
  if (readmeData.description && readmeData.description.length > 0) {
    tableOfContents += `- [Description](#description)\n`;
  }
  // If applicable, generate user story
  if (readmeData.userStory && readmeData.userStory.length > 0) {
    tableOfContents += `- [User Story](#user-story)\n`;
  }

  // If applicable, generate resources used
  if (readmeData.resourcesUsed && readmeData.resourcesUsed.length > 0) {
    tableOfContents += `- [Resources Used](#resources-used)\n`;
  }

  // If applicable, generate usage
  if (readmeData.usage && readmeData.usage.length > 0) {
    tableOfContents += `- [Usage](#usage)\n`;
  }

  // If applicable, generate contributors
  if (readmeData.contributors && readmeData.contributors.length > 0) {
    tableOfContents += `- [Contributors](#contributors)\n`;
  }

  // If applicable, generate contact info
  if (readmeData.contactInfo && readmeData.contactInfo.length > 0) {
    tableOfContents += `- [Contact Information](#contact-information)\n`;
  }

  return tableOfContents;;
}

// function to generate markdown for README
export const generateMarkdown = (readmeData) => {

  // Collect data from generateTableofContents
  const tableOfContents = generateTableOfContents(readmeData);

  return `# ${readmeData.title}

  ${tableOfContents}

  ${generateMarkdownSection(readmeData.description, generateDescriptionMD, 'Description')}

  ${generateMarkdownSection(readmeData.userStory, generateStoryMD, 'User Story')}

  ${generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed, 'Resources Used')}

  ${generateMarkdownSection(readmeData.usage, generateUsage, 'Usage')}

  ${generateMarkdownSection(readmeData.contributors, generateContributors, 'Contributors')}

  ${generateMarkdownSection(readmeData.contactInfo, generateContactInfo, 'Contact Information')}`;
}