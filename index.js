// TODO: Include packages needed for this application
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of the project?",
    },
    {
        type: "input",
        name: "summary",
        message: "Write a summary of how the project functions.",
    },
    {
        type: "input",
        name: "download",
        message: "Explain the download instructions.",
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
