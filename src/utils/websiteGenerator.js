const fs = require('fs');
const path = require('path');
const { elementFactory } = require('./elementFactory');

function generateWebsite(elements) {
  let html = '<!DOCTYPE html>\n<html>\n<head>\n<title>Website Builder</title>\n</head>\n<body>\n';

  elements.forEach(element => {
    html += generateElement(element);
  });

  html += '\n</body>\n</html>';

  fs.writeFileSync(path.resolve(__dirname, '../public/website.html'), html);
}

function generateElement(element) {
  let html = '';

  switch (element.type) {
    case 'div':
      html += `<div id="${element.id}" style="${generateStyles(element.styles)}">\n`;
      element.children.forEach(child => {
        html += generateElement(child);
      });
      html += '</div>\n';
      break;
    case 'p':
      html += `<p id="${element.id}" style="${generateStyles(element.styles)}">${element.content}</p>\n`;
      break;
    case 'img':
      html += `<img id="${element.id}" src="${element.src}" alt="${element.alt}" style="${generateStyles(element.styles)}" />\n`;
      break;
    default:
      break;
  }

  return html;
}

function generateStyles(styles) {
  let styleString = '';

  for (let style in styles) {
    styleString += `${style}: ${styles[style]}; `;
  }

  return styleString;
}

module.exports = {
  generateWebsite
};