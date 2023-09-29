// Create a reusable function that generates new paragraph content

// function to generate markdown for README
export const generateMarkdown = (readmeData) => {
  return `# ${readmeData.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${readmeData.description}

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