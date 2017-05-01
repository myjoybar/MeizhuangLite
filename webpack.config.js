/**
 * Created by joybar on 26/03/2017.
 */
// config/webpack.config.js
const webpack = require('webpack');

// 配置目录
// 因为我们的webpack.config.js文件不在项目根目录下，所以需要一个路径的配置
const path = require('path');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const ROOT_PATH = path.join(__dirname, '../'); // 项目根目录
const MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录

//const BUILD_PATH = path.join(ROOT_PATH, '01-01','src'); // 最后输出放置公共资源的目录
const BUILD_PATH = path.join(CURRENT_PATH, 'src'); // 最后输出放置公共资源的目录,和上面一样

module.exports = {
    context: __dirname + '/src',
    entry: {
        //index: './js/index.js',
        index: './js/router.js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                //  test: /\.js?$/, loaders: ['babel-loader'],////babel加载器可以把jsx的语法转换为js的语法，也可以把es6的语法标准转换es5的语法标准
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                // loader: "babel",
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置

                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style-loader!css-loader!less-loader'
            // },
            // {
            //     test: /\.less$/,
            //     loaders: [
            //         'style-loader',
            //         'css-loader?-minimize',
            //         'postcss',
            //         'less'
            //     ]
            // },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },


        ]
    },
    output: {
        path: BUILD_PATH, // 设置输出目录
        // filename: '[name].bundle.js', // 输出文件名 index.bundle.js
        filename: 'bundle.js', // 输出文件名 bundle.js
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx', '.coffee'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
    // },

    plugins: [
        // 插件扔在这里
    ]
}