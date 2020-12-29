// Import license badge links file
// const badgeLinks = require('./shieldBadge');

// function to generate markdown for README
function generateMarkdown(data) {
    const shieldBadge = {
        'MIT License': '[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        "GNU Lesser General Public License v3.0": "[![License: LGPL 3.0](https://img.shields.io/badge/license-LGPL%203.0-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        "Mozilla Public License v2.0": "[![License: MPL v2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0.html)",
        "GNU Affero General Public License v3.0": "[![License: AGPL v3.0](https://img.shields.io/badge/license-AGPL%20v3-red.svg)](https://www.opensource.org/licenses/AGPL-3.0)",
        "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
        "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)](https://www.opensource.org/licenses/Apache-2.0)",
        "GNU General Public License v3.0": "[![License: GPL v3.0](https://img.shields.io/badge/license-GPLv3-pink.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    };
    
 
    // Set URL for license badge information
    // data.shieldBadge = badgeLinks[data.license];
  return `
  
  # ${data.title}
    ${shieldBadge[data.license]}

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
  This application is licensed under the ${data.license} 


  ## Contribution
  Contributors:
      ${data.contribution}
    
  ## Tests
  The following is needed to run the test: 
      ${data.tests}
    
  ## Questions
  For any other questions about this project, please visit my GitHub page below:
      [GitHub Profile](https://github.com/${data.username}/${data.title})
    
  Or you can email me directly at: [${data.email}](mailto:${data.email}).
  
`;
}

module.exports = generateMarkdown;
