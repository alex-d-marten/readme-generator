const generateRequiredContent = (titleText, descriptionText, installationText, usageText, emailText, githubText) => {
    return `
# ${titleText}

## Description
${descriptionText}

## Table of contents


## Installation Instructions
${installationText}

## How to use this Project
${usageText}

## Questions? Contact me!
If you have any questions about the project listed here or myself in general please contact me at ${emailText}. I will get back to you soon.

Interested in any of my other projects? Check out my github [${githubText}](https://github.com/${githubText})`
};

generateContributorsAndTests = (contributorsText, testingText) => {
    return `
## Contributors
${contributorsText}

## Testing
${testingText}`;
};

// generateLicenseBadge = licenseBadge => {
//     if(li)
// }

module.exports = markdownTemplate => {
    const { title, description, installation, usage, email, github, contribution, testing} = markdownTemplate;

    return `
    ${generateRequiredContent(title, description, installation, usage, email, github)}
    ${generateContributorsAndTests(contribution, testing)}
    `;
};