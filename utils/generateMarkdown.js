// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licBadge = {
    'Apache 2.0': function () {
      return '[![licBadge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    },
    'bsl-1.0': function () {
      return '[![licBadge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    },
    'CC': function () {
      return '[![licBadge](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    },
    'ISC': function () {
      return '[![licBadge](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    },
    'MIT': function () {
      return '[![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    },
    'Mozilla 2.0': function () {
      return '[![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    },
    'None': function () {
      return '';
    }
  };
  return licBadge[license]();
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = {
    'Apache 2.0': function () {
      return `## License
      [![licBadge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <br /> Application is backed by ${license} license.`;
    },
    'bsl-1.0': function () {
      return `## License
      [![licBadge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) <br /> Application is backed by ${license} license.`;
    },
    'CC': function () {
      return `## License
      [![licBadge](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/) <br /> Application is backed by ${license} license.`;
    },
    'ISC': function () {
      return `## License
      [![licBadge](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) <br /> Application is backed by ${license} license.`;
    },
    'MIT': function () {
      return `## License
      [![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> Application is backed by ${license} license.`;
    },
    'Mozilla 2.0': function () {
      return `# License
      [![licBadge](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br /> Application is backed by ${license} license.`;
    },
    'None': function () {
      return '';
    }
  };
  return section[licBadge]();
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${data.title} 

  ${renderLicenseBadge(data.license)}
  ## Contents
  - [Summary](#summary)
  - [Download](#download)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [Contact](#contact)
  ## Download
  📲 ${data.download}
  ## Usage
  🔬 ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributions
  📟 ${data.contributions}
  ## Testing
  🗳 ${data.testing}
  ## Contact
  🤓 I can be reached on my Github profile or by email
  🐈 My GitHub profile: [${data.github-username}](https://github.com/${data.github-username})
  📧 I can be contacted by email at: ${data.email}
  🚭 README was created by ${data.contributions} using the [ReadMe-Generator](https://github.com/Titoxox97/ReadMe-Generator)
`;
}
module.exports = generateMarkdown;
