const path = require('path');

module.exports = {
  mode: 'development',
  entry: './objdect/js/index.jsx',
  output: {
    path: path.join(__dirname, '/objdect/static/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Test for js or jsx files
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react', {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
