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
        rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
                {test: /\.(png|jpg|jpeg|gif)$/i, type: 'asset/resource', 
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: { progressive: true },
                                optipng: { enabled: true },
                                pngquant: { quality: [0.65, 0.90], speed: 4 },
                                gifsicle: { interlaced: false },
                                webp: { quality: 75 },
                            },
                        },
                    ],
                },
        ],
    },
};