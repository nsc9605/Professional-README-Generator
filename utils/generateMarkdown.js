// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
   
  ## Description
  ![GitHub Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg "License Badge")

    ${data.description}
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## Contributing
    ${data.contributing}
  ## Test
    ${data.test}
  ## Credits
    ${data.credit}
  ## License
      For more information on licensing, please click the link below.

  [License](https://opensource.org/licenses/${data.license})

  ## Questions
    For any other questions about this project, please visit my GitHub page below:
    [GitHub Profile](https://github.com/${data.username})
    Or you can email me at: ${data.email}.
  
`;
}

module.exports = generateMarkdown;
