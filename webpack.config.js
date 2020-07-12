const path = require('path');
module.exports = {
   // define entry file and output
   entry: './src/index.js',
   output: {
       path: path.resolve('dist'),
       filename: 'main.js'
   },
   devServer: {
    historyApiFallback: true
   },
   // define babel loader
   module: {
       rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
       ]
   }
};
