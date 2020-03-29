require("babel-polyfill");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return{
    entry:['babel-polyfill', './src/index.js'],
    output:{
      path:path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module:{
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use:{
            loader:"babel-loader"
          }
        },
        {
          test:/\.s?css$/,
          use:CSSExtract.extract({
            use:[{
              loader:'css-loader',
              options:{
                sourceMap:true
              }
            },
            {
              loader:'sass-loader',
              options:{
                sourceMap:true
              }
            }]
          })
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [{
            loader: 'file-loader',
            options:{
              outputPath:path.join('../', 'images')
            }
          }],
        },
      ]
    },
    plugins:[
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath:'/dist/'
    }
  };
}