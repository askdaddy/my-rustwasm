const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: ['web', 'es5'],
    entry: './src/app',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts",".js",".wasm"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "."),
            withTypeScript: true,
            outDir: path.resolve(__dirname,'pkg'),
            outName:"wasm"
        }),
        new HtmlWebpackPlugin(),
    ],
    experiments: {
        syncWebAssembly: true,
    },
}
