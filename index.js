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
      default: "npm install"
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
  .then((response) =>
    fs.writeFile("README.md", 
`# ${response.title}\n
## Description\n
${response.description}\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
\n
## Installation\n
Follow these steps to install and set up this application:
1. ${response.installation}\n
## Usage\n
${response.usage}\n
## License\n
Distributed under the ${response.license} license.\n
## Contributing\n
${response.contribution}\n
## Tests\n
${response.testInstructions}\n
## Questions\n
Visit my GitHub profile: https://github.com/${response.username}\n
For any questions, please reach out to me via email: ${response.email}`, 
    (err) => err ? console.error(err) : console.log("Success!")
    )
  );