const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/fi1-result/runtime-es5.js',
        './dist/fi1-result/runtime-es2015.js',
        './dist/fi1-result/polyfills-es5.js',
        './dist/fi1-result/polyfills-es2015.js',
        './dist/fi1-result/main-es5.js',
        './dist/fi1-result/main-es2015.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/f1-races-results.js');

      files.forEach( (file) => {
        fs.remove(file)
      });
      await fs.copyFile('widget/f1-races-results.js','./dist/fi1-result/f1-races-results.js');
      await fs.copyFile('src/index.html','./dist/fi1-result/index.html');
    
}
build();