const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = await getJsFiles();

  await fs.ensureDir('widget');

  await concat(files, 'widget/f1-races-results.js');

  files.forEach((file) => {
    fs.remove(file)
  });
  await fs.copyFile('widget/f1-races-results.js', './dist/fi1-result/f1-races-results.js');
  await fs.copyFile('src/index.html', './dist/fi1-result/index.html');

}

getJsFiles = async () => {
  return await fs.readdirSync('./dist/fi1-result/')
  .filter((file) => file.includes('.js'))
    .map((file) => {
      return './dist/fi1-result/' + file;
    });

}
build();
