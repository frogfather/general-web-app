const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    target: "web",
    entry: {
        main: ["webpack-hot-middleware/client?reload=true", "./src/client/inde.jsx"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        filename: "client.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env",
                            ["@babel/preset-react", {"runtime": "automatic" }]]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}