const path = require('path');

module.exports = {
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        assetModuleFilename: 'images/[name][ext]',
    },
    mode: 'production',
    module: {
        rules: [{ test: /\.css$/, use: 'css-loader' },
                {test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource', },
        ],
    },
}