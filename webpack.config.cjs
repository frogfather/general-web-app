const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    target: "web",
    entry: "./src/client/index.jsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/",
        filename: "client.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: {
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