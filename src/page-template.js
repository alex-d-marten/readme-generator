const generateRequiredContent = (titleText, descriptionText, installationText, usageText, emailText, githubText, contributingText, testsText, licenseText) => {
    return `
# ${titleText}

![License](https://img.shields.io/badge/License-${licenseText}-blue.svg)

## Description

${descriptionText}

---

## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

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

---

## License

Please note that this project is covered under the ${licenseText} license.

---`
};



module.exports = markdownTemplate => {
    const { title, description, installation, usage, email, github, contributing, tests, license} = markdownTemplate;

    return `
    ${generateRequiredContent(title, description, installation, usage, email,  github, contributing, tests, license)}`;
};