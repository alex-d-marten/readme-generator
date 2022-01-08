const generateTitle = titleText => {
    return `
# ${titleText}
    `
}

module.exports = markdownTemplate => {
    const { title } = markdownTemplate;

    return `
    ${generateTitle(title)}
    `;
};