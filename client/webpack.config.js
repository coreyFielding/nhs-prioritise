const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    target: "web",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        proxy: [{
            context: ['/'],
            target: 'http://localhost:8000'
        }]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",  
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],  
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public/index.html"),
        }),
        new MiniCssExtractPlugin({
          filename: "src/assets/tailwind.output.css",
        }),
        new Dotenv(),
    ],
}