

//a function to generate markdown for README
function generateMarkdown(response) {
  let newMarkdown = ` \n\n


 
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
## Contributions \n
 
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