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
    libraryTarget: 'commonjs' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
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
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};