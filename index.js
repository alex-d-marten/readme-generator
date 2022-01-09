// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateRequiredContent = require('./src/page-template');
const {writeMarkdown} = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (Required)',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project? (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation procedure of your project? (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log("Please provide installation instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the intended use of your project? (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any contribution guidelines for your project. If none then leave blank.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If your project has tests, describe them and their intended use here. If none then leave blank and press enter.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select any license that applies to your project. (Required)',
            choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_2.0', 'Apache_2.0', 'MIT_License', 'Boost_Software_1.0','Unlicense'],
            validate: licenseInput => {
                if(licenseInput) {
                    return true;
                } else {
                    console.log('Please select an option.')
                    return false;
                }
            }
        }
    ])
}

promptUser()
    .then(markdownData => {
        console.log(markdownData)
        return generateRequiredContent(markdownData);
    })
    .then(pageMD => {
        return writeMarkdown(pageMD)
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
