const fetch = require("node-fetch");

// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderBadges(username, repo, license) {
  let ret = ""
  ret += `
![Analysis](https://img.shields.io/github/languages/top/${username}/${repo})`
  if (license) {
    ret += `
![License](https://img.shields.io/github/license/${username}/${repo})
  `
  }
  return ret
}

const generateLicenseSection = async (github, repo) => {
  let ret = ""
  await fetch("https://api.github.com/repos/" + github + "/" + repo)
    .then(async response => {
      if (response.ok) {
        await response.json()
          .then(async data => {
            ret += await data.license.name
          });
      };
    });
    return ret;
}

// function to generate markdown for README

const generateMarkdown = async data => {
  console.log("GENERATE MARKDOWN!")
  console.log(data)

  let addSections = "";

  // TITLE

  if (data.title) { //it's required!!
    addSections += `# ${data.title}
`
  }

  
  // repo badges

  addSections += `${renderBadges(data.github, data.repo, data.license)}`

  // description

  if (data.description) {
    addSections += `
## Description
${data.description}
`
  }

  // toc

  addSections += tableOContents(data)

  // installation

  if (data.installation) {
    addSections += `
## Installation
${data.installation}
`
  }

  // usage

  if (data.usage) {
    addSections += `
## Usage
${data.usage}
`
  }

  // license

  if (data.license) { // get into render license

    addSections += `
## License
This application is covered under the ${await generateLicenseSection(data.github, data.repo)} 
`
    console.log(await generateLicenseSection(data.github, data.repo))
  }

  // contributing

  if (data.contributing) {
    addSections += `
## Contributing
${data.contributing}
`
  }

  // tests

  if (data.tests) {
    addSections += `
## Tests
${data.tests}
`
  }
  // questions

  if (data.email) {
    addSections += `
## Questions
If there are any additional questions send me an email! 
${data.email}
`
  }
  console.log(addSections)
  return addSections
};

// Creates Table of Contents

function tableOContents(data) {
  const content = (Object.entries(data))
  let ret = "";
  let i = 2; //cut title and description
  ret += `
## Table of Contents`
  while (content[i][0] != 'github') {
    let header = content[i][0].charAt(0).toUpperCase() + content[i][0].slice(1);
    ret += `
* [${header}](#${content[i][0]})`
    i++;
  }
  ret += `
* [Questions](#questions)
`
  return ret;
}

module.exports = generateMarkdown;