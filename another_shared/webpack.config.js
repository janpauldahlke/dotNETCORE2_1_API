const path = require('path');
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './lib');



module.exports = {
  context: sourcePath,
  entry: {
    main: './index.jsx'
  },
  output: {
    path: outPath,
    filename: './index.js',
    libraryTarget: 'commonjs' 
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};