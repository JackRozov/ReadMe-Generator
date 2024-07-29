
//making these global varibales so that they can be accessed later on
let licenseBadge = "";
let licenseLink = "";
let fullLicense="";
// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //creating if/else statements with switch for efficiency. this checks which license the user selected from the list. 
  //there is a different casse for each type of selectable licence. 
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
 
      return licenseBadge;
    case "GNU General Public License v3.0":
      licenseBadge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
 
      return licenseBadge;
    case "MIT License":
      licenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
 
      return licenseBadge;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
 
      return licenseBadge;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
 
      return licenseBadge;
    case "Boost Software License 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
 
      return licenseBadge;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
 
      return licenseBadge;
    case "Eclipse Public License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
 
      return licenseBadge;
    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
 
      return licenseBadge;
    case "GNU General Public License v2.0":
      licenseBadge =
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
 
      return licenseBadge;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
 
      return licenseBadge;
    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
 
      return licenseBadge;
    case "The Unlicense":
      licenseBadge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
 
      return licenseBadge;
    default:
      console.log("Error");
      break;
  }
  console.log(licenseBadge + licenseLink);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //creating if/else statements with switch for efficiency. this checks which license the user selected from the list. 
  //there is a different casse for each type of selectable licence. 
  switch (license) {
    case "none":

      break;
    case "Apache License 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";

      return licenseLink;
    case "GNU General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
 
      return licenseLink;
    case "MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
 
      return licenseLink;
    case "BSD 2-Clause 'Simplified' License":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
 
      return licenseLink;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
 
      return licenseLink;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
 
      return licenseLink;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
 
      return licenseLink;
    case "Eclipse Public License 2.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
 
      return licenseLink;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
 
      return licenseLink;
    case "GNU General Public License v2.0":
      licenseLink =
        "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
 
      return licenseLink;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
 

      return licenseLink;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
 
      return licenseLink;

    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
 
      return licenseLink;

    default:
      //if theres an error it logs that
      console.log("Error");
      break;
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //puts the badge and link together
   fullLicense = `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`;
  return fullLicense;
}

//a function to generate markdown for README
function generateMarkdown(response) {
  fullLicense = renderLicenseSection(response.license);
  let newMarkdown = ` \n\n
  ${fullLicense}\n


 
## Description \n 
  ${response.description}\n 


## Installation \n 
   ${response.installation}\n
## Usage \n

1. Clone the repo from github (link in the contact section) 
2. Run "node index.js" in the terminal\n

**Additional Usage Info:** 
   ${response.usage}\n
## Testing \n
  ${response.test}\n
## Contributions 
${response.contribute}\n\n
## License \n 
  This project is licensed under ${response.license}. For more information please click on the badge below: 
  \n \n ${fullLicense}\n 
## Contact \n 
**For Questions, please reach out to me on Github or by Email** \n
  - Github: 
   [${response.github}](https://github.com/${response.github})\n
  - Email Address: 
  [${response.email}](mailto:${response.email})\n
  ### Project Links: \n
 - [Github Repository](${response.repo})\n
 - [Deployed Site](${response.deploy})`;

  return newMarkdown;
}

//exports just the markdown
module.exports = {
  generateMarkdown,
};