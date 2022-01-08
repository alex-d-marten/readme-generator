const generateRequiredContent = (titleText, descriptionText, installationText, usageText) => {
    return `
# ${titleText}

## Description
${descriptionText}

## Table of contents


## Installation Instructions
${installationText}

## How to use this Project
${usageText}
    `
};

generateQuestions = (emailText, githubText) => {
    return `
## Questions? Contact me!
If you have any questions about the project listed here or myself in general please contact me at ${emailText}. I will get back to you soon.

Interested in any of my other projects? Check out my github [${githubText}](https://github.com/${githubText})
    `
}

module.exports = markdownTemplate => {
    const { title, description, installation, usage, email, github} = markdownTemplate;

    return `
    ${generateRequiredContent(title, description, installation, usage)}
    ${generateQuestions(email, github)}
    `;
};