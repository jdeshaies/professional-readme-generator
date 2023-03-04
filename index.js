const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title:",
      name: "title",
    },
    {
      type: "input",
      message: "Description:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions:",
      name: "installation",
      default: "npm install",
    },
    {
      type: "input",
      message: "Usage Information",
      name: "usage",
    },
    {
      type: "input",
      message: "Contribution Guidelines:",
      name: "contribution",
    },
    {
      type: "input",
      message: "Test Instructions:",
      name: "testInstructions",
    },
    {
      type: "list",
      message: "License:",
      name: "license",
      choices: [
        "Apache license 2.0",
        "Boost Software License 1.0",
        "BSD 2-clause 'Simplified' license",
        "BSD 3-clause 'New' or 'Revised license",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "MIT",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "GitHub Username:",
      name: "username",
    },
    {
      type: "input",
      message: "Email Address:",
      name: "email",
    },
  ])
  .then(
    (response) => generateReadMe(response), (err) => (err ? console.error(err) : console.log("Success!"))
  );

function generateReadMe(response) {
    fs.writeFile('README.md',
`${renderLicense(response.license)}

# ${response.title}

## Description\n
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation\n
Follow these steps to install and set up this application:
1. ${response.installation}

## Usage\n
${response.usage}

## License\n
Application covered under the ${response.license} license.

## Contributing\n
${response.contribution}

## Tests\n
${response.testInstructions}

## Questions\n
Visit my GitHub profile: https://github.com/${response.username}\n
For any questions, please reach out to me via email: ${response.email}`, 
    (err) => err ? console.error(err) : console.log('Success!'));
}

function renderLicense(license){
    let licenseURL = '';
    switch (license){
        case 'Apache license 2.0':
            licenseURL = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
            break;
        case 'Boost Software License 1.0':
            licenseURL = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
            break;
        case 'BSD 2-clause "Simplified" license':
            licenseURL = '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
            break;
        case 'BSD 3-clause "New" or "Revised" license':
            licenseURL = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
            break;
        case 'Creative Commons Zero v1.0 Universal':
            licenseURL = '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
            break;
        case 'Eclipse Public License 2.0':
            licenseURL = '![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)';
            break;
        case 'GNU Affero General Public License v3.0':
            licenseURL = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
            break;
        case 'GNU General Public License v2.0':
            licenseURL = '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
            break;
        case 'GNU Lesser General Public License v2.1':
            licenseURL = '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)';
            break;
        case 'MIT':
            licenseURL = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
            break;
        case 'Mozilla Public License 2.0':
            licenseURL = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
            break;
        case 'The Unlicense':
            licenseURL = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
            break;
    }
    return licenseURL;
}