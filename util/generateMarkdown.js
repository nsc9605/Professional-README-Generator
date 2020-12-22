// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  

  ## Description
  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Installation
  The following dependencies are required to be installed for this application to run properly:
      ${data.installation}

  ## Usage
  Please follow the directions below in order to run this app:
      ${data.usage}

  ## License
  This application is licensed under the ${data.license} License
      ![GitHub License](https://img.shields.io/badge/license-${data.license}-orange.svg)

  ## Contribution
  Contributors:
      ${data.contribution}
    
  ## Tests
  The following is needed to run the test: 
      ${data.tests}
    
  ## Questions
  For any other questions about this project, please visit my GitHub page below:
      [GitHub Profile](https://github.com/${data.username}/${data.title})
    
  Or you can email me directly at: ${data.email}
  
`;
}

module.exports = generateMarkdown;
