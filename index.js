// packages needed for this application
var inquirer = require("inquirer");
const generate = require("./assets/generate.js");
const fs = require("fs");
let fileName = "README-generated.md"

// array of questions for user input
const questions = {
  title: "Project Title",
  description: "Description of Project",
  installation: "Installation Instructions",
  usage: "Usage Information",
  contribute: "Contribution Guidelines",
  test: "Test Instructions",
  license: "License",
  github: "Github Username",
  email: "Email Address",
  repo: "Please copy paste the repo URL",
  deploy: "Please copy paste the URL of the deployed site",
};

//function to write README file
function writeToFile(response) {
  const title = `<h1 style= "text-center"> ${response.title} </h1>\n`;
  //creates the file with just the title
  fs.writeFile(fileName, title, (error) => {
    //or log an error if not
    if (error) {
      console.log(error);
    } else {
      console.log("title success");
    }
  });
  //append the file with the rest of the markdown
  fs.appendFile(fileName, generate.generateMarkdown(response), (err) =>
    //if theres an error log that, otherwise let user know that it work.
    err ? console.error(err) : console.log("information logged! Please check folder for your new README")
  );
}

// function to initialize app
function init() {
  inquirer
    .prompt([
      //all the questions are below
      {
        type: "input",
        message: questions.title,
        name: "title",
      },
      {
        type: "input",
        message: questions.description,
        name: "description",
      },
      {
        type: "input",
        message: questions.installation,
        name: "installation",
      },
      {
        type: "input",
        message: questions.usage,
        name: "usage",
      },
      {
        type: "input",
        message: questions.contribute,
        name: "contribute",
      },
      {
        type: "input",
        message: questions.test,
        name: "test",
      },
      {
        type: "list",
        message: questions.license,
        name: "license",
        choices: [
          "none",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
      },
      {
          type: "input",
          message: questions.github,
          name: "github",
        },
        {
            type: "input",
            message: questions.email,
            name: "email",
        },
        {
          type: "input",
          message: questions.repo,
          name: "repo",
        },
        {
          type: "input",
          message: questions.deploy,
          name: "deploy",
        },
    ])
    .then((response) => {
      console.log(response);
      writeToFile(response);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}

// Function call to initialize app
init();