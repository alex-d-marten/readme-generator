const licenseBadgeArr = []

const generateRequiredContent = (titleText, descriptionText, installationText, usageText, emailText, githubText, licenseText) => {
    return `
# ${titleText}

![License](https://img.shields.io/badge/License-${licenseText}-blue.svg)

## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [License](#license)
* [Contribution Guidelines](#contribution)
* [Testing](#testing)

---

## Description
${descriptionText}

---

## Installation
${installationText}

---

## Usage
${usageText}

---

## Questions
If you have any questions about the project listed here or myself in general please contact me at ${emailText}. I will get back to you soon.

Interested in any of my other projects? Check out my github [${githubText}](https://github.com/${githubText})

---

## License
Please note that this project is covered under the ${licenseText} license.
---`
};

generateContributorsAndTests = (contributorsText, testingText) => {
    return `
## Contribution
${contributorsText}

## Testing
${testingText}`
};



module.exports = markdownTemplate => {
    const { title, description, installation, usage, email, github, contribution, testing, license } = markdownTemplate;

    return `
    ${generateRequiredContent(title, description, installation, usage, email, github, license)}
    ${generateContributorsAndTests(contribution, testing)}`;
};