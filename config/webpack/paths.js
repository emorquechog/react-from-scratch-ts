import path from 'path';

module.exports = {
    root: path.resolve(__dirname, '../', '../'),
    outputPath: path.resolve(__dirname, '../', '../', 'build'),
    entryPath: path.resolve(__dirname, '../', '../', 'public/index.tsx'),
    templatePath: path.resolve(__dirname, '../', '../', 'public/index.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js',
    testPath: path.resolve(__dirname, '../', '../', 'tests')
};
