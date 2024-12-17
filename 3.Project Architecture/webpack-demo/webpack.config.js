const { watch } = require('fs')
const Handlebars = require("handlebars");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js', // tuka kazvame kato pochne da obikalq failovete otkude pochva da obikalq
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    devServer: {
        static: './dist',
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["css-loader", MiniCssExtractPlugin.loader],
          },
          {
            test: /\.handlebars$/, loader: "handlebars-loader"
          }
        ],
      },
}

// tova si go prai po default cqloto neshto prosto ot tuka mojem da go konfigurirame