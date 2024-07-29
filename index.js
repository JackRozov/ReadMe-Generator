// packages needed for this application
var inquirer = require("inquirer");
const generate = require("./assets/generate.js");
const fs = require("fs");
let fileName = "Generated-ReadMe.md"

// array of questions for user input
const questions = {
  title: "Title",
  description: "Description ",
  installation: "Installation Instructions",
  usage: "Usage Information",
  contribute: "Contribution Guide",
  test: "Test Instructions",
  github: "Github Username",
  email: "Email Address",
  repo: "Please copy paste the repo URL",
  deploy: "Please copy paste the URL of the deployed site",
};

//function to write README file
function writeToFile(response) {
  const title = `<h1 style= "text-center"> ${response.title} </h1>\n`;
  fs.writeFile(fileName, title, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("title success");
    }
  });
  //append the file with the rest of the markdown
  fs.appendFile(fileName, generate.generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log("information logged! Please check folder for your new README")
  );
}

// function to initialize app
function init() {
  inquirer
    .prompt([
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
   
}

// Function call to initialize app
init();