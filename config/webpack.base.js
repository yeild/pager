const path = require('path')

module.exports = {
  entry: {
    'pager': './src/pager'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      }
    ]
  }
}