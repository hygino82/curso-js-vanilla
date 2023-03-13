const rcs = require('rcs-core');
const fs = require('fs');

rcs.fillLibraries(fs.readFileSync('./style.css', 'utf8'));

const css = rcs.replace.css(fs.readFileSync('./style.css', 'utf8'));
//const js = rcs.replace.js(fs.readFileSync('./src/App.js', 'utf8'));
const html = rcs.replace.html(fs.readFileSync('./index.html', 'utf8'));

// output some warnings which has been stacked through the process
//rcs.warnings.warn();

fs.writeFileSync('./dist/styles.css', css);
//fs.writeFileSync('./dist/App.js', js);
fs.writeFileSync('./dist/index.html', html);