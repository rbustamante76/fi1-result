const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/fi1-result/runtime.js',
        './dist/fi1-result/polyfills.js',
        './dist/fi1-result/main.js'
      ];
    
      await fs.ensureDir('widget');
      await concat(files, 'widget/f1-races-results.js');
}
build();