// Include packages needed
const inquirer = require('inquirer');
const generateMarkdown = require('./src/page-template');
const {writeMarkdown} = require('./utils/generateMarkdown.js');

// function to prompt user with a series of questions relating to their project. Using inquirer for the prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
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
            message: 'What is your email address?',
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
            message: 'What is the title of your project?',
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
            message: 'What is the description of your project?',
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
            message: 'What is the installation procedure of your project?',
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
            message: 'What is the intended use of your project? Additionally, how does one use this project?',
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
            message: 'Please provide contribution guidelines for your project.',
            validate: contributingInput => {
                if(contributingInput) {
                    return true;
                } else {
                    console.log("Please provide contribution guidelines for your project!")
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe the tests your project has and how one should perform these tests.',
            validate: testsInput => {
                if(testsInput) {
                    return true;
                } else {
                    console.log('Please describe your tests!')
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select any license that applies to your project.',
            choices: ['GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_2.0', 'Apache_2.0', 'MIT_License', 'Boost_Software_1.0','Unlicense', 'None'],
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

// call the prompt function to start asking questions to the user
promptUser()
    .then(markdownData => {
        console.log(markdownData)
        return generateMarkdown(markdownData);
    })
    .then(pageMD => {
        return writeMarkdown(pageMD)
    })