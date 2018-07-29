var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|build)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    externals: {
        "react": "commonjs react"
    }
};