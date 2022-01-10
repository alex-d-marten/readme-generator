// main function to generate the bulk of the README.md body
const generateMarkdown = (titleText, descriptionText, installationText, usageText, emailText, githubText, contributingText, testsText, licenseText) => {
    return `
# ${titleText}

${generateLicense(licenseText)}

## Description

${descriptionText}

---

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

---

## Installation

${installationText}

---

## Usage

${usageText}

---

## Contributing

${contributingText}

---

## Tests

${testsText}

---

## Questions

If you have any questions about the project listed here or myself in general please contact me at ${emailText}. I will get back to you as soon as possible, thanks!

Interested in any of my other projects? Check out my github [${githubText}](https://github.com/${githubText})

---`
};

// separate callback function for the license, if there is no license then an empty string is returned.
const generateLicense = licenseText => {
    if(licenseText === 'None') {
        return '';
    }
    return `
![License](https://img.shields.io/badge/License-${licenseText}-blue.svg)

## License

This project is covered under the ${licenseText} license.`
}

// export the markdown template so a file can be written.
module.exports = markdownTemplate => {
    const { title, description, installation, usage, email, github, contributing, tests, license} = markdownTemplate;

    return `
    ${generateMarkdown(title, description, installation, usage, email,  github, contributing, tests, license)}`;
};