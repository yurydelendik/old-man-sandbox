 const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: './test.js',
     output: {
         path: __dirname,
         filename: 'bundle.es6.js',
     }
}
