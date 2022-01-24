const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 체인은 역순으로 실행된다.
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}