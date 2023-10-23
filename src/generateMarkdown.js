const regexTrim = (data) => {
  return data.replace(/^(?:\t| {2,})/gm, '');
};

// Create a reusable function that generates new paragraph content
const generateMarkdownSection = (dataArray, templateFunction, sectionHeader) => {
  // Return an empty string if there are no descriptions
  if (!dataArray || dataArray.length == 0) {
    return '';
  }

  // Initialize an empty string to store the markdown in
  let sectionMarkdown = '';

  // Concatenate the Section Header
  sectionMarkdown += `## ${sectionHeader}\n`;

  // Loop through the array and generate markdown for each sub-section
  dataArray.forEach((data) => {
    // Concatenate the markdown sub-sections
    sectionMarkdown += templateFunction(data);
  });

  return sectionMarkdown;
};

// Generates the Description section
const generateDescriptionMD = (descriptionData) => `
  ### ${descriptionData.header}
  ${descriptionData.text}\n`
;

// Create a function that returns the userStory 
const generateStoryMD = (userStoryData) => `
  - ${userStoryData.when}
  - ${userStoryData.then}\n`
;


// Create a function that returns resourcesUsed
const generateResourcesUsed = (resourcesUsedData) => `
  - ${resourcesUsedData.resource}\n`
;

// Function to generate Usage markdown
const generateUsage = (usageData) => `
  ${usageData.usageText}\n`
;


// Function to generate contributors list.
const generateContributors = (contributorsData) => `
  - ${contributorsData.text}\n`
;

// Generate contact info
const generateContactInfo = (contactInfoData) => `
  - GitHub: [${contactInfoData.name}](https://github.com/${contactInfoData.name})
  - Email: ${contactInfoData.email}\n`
;

// Generate a table of content for the README.
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

  return tableOfContents;
};


// function to generate markdown for README
export const generateMarkdown = (readmeData) => {
  if (readmeData.subtitleText === false) {
    return '';
  }

  // Collect data from generateTableofContents
  const tableOfContents = generateTableOfContents(readmeData);

  // Collect data from each section of a README File
  const descriptionSection = generateMarkdownSection(readmeData.description, generateDescriptionMD, 'Description');
  const userStorySection = generateMarkdownSection(readmeData.userStory, generateStoryMD, 'User Story');
  const resourcesUsedSection = generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed, 'Resources Used');
  const usageSection = generateMarkdownSection(readmeData.usage, generateUsage, 'Usage');
  const contributorsSection = generateMarkdownSection(readmeData.contributors, generateContributors, 'Contributors');
  const contactInfoSection = generateMarkdownSection(readmeData.contactInfo, generateContactInfo, 'Contact Information');

  // const markdownContent = `
  //   # ${readmeData.title}
  //   ${readmeData.subtitleText ? `### ${readmeData.subtitleText}` : ''}

  //   ${tableOfContents}

  //   ${generateMarkdownSection(readmeData.description, generateDescriptionMD, 'Description')}

  //   ${generateMarkdownSection(readmeData.userStory, generateStoryMD, 'User Story')}

  //   ${generateMarkdownSection(readmeData.resourcesUsed, generateResourcesUsed, 'Resources Used')}

  //   ${generateMarkdownSection(readmeData.usage, generateUsage, 'Usage')}

  //   ${generateMarkdownSection(readmeData.contributors, generateContributors, 'Contributors')}

  //   ${generateMarkdownSection(readmeData.contactInfo, generateContactInfo, 'Contact Information')}
  // `;

  // Concatenate sections together, trying to remove the empty sections
  const markdownSections = [
    `# ${readmeData.title}`,
    readmeData.subtitleText ? `### ${readmeData.subtitleText}\n` : '',
    tableOfContents,
    descriptionSection,
    userStorySection,
    resourcesUsedSection,
    usageSection,
    contributorsSection,
    contactInfoSection
  ];

  const markdownContent = markdownSections.filter(section => section.trim() !== '').join('\n');

  return regexTrim(markdownContent);
};