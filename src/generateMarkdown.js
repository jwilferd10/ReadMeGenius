// function to generate markdown for README
export const generateMarkdown = (data) => {
  return `# ${data.title}

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
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}