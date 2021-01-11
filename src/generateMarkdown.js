// function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.title}
  
  ## Table of Contents: 
  
  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## License:
  ${data.license}

  ## Additional Info:
  - Github:
  - Email:
  
  `;
}

module.exports = generateMarkdown;
