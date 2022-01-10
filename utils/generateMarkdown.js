// need to import the file system to write files
const fs = require('fs');

// function containing a new promise to generate the README.md file
const writeMarkdown = markdownContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', markdownContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README generated!'
      });
    });
  });
};

module.exports = { writeMarkdown };
