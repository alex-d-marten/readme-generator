const generateTitle = (titleText, descriptionText, installationText, usageText) => {
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
}

module.exports = markdownTemplate => {
    const { title, description, installation, usage } = markdownTemplate;

    return `
    ${generateTitle(title, description, installation, usage)}
    `;
};