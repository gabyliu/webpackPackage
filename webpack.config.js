var webpack = require('webpack');
var path = require('path');
var fs = require("fs");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PackagePlugin = require('./plugins/package-plugin');//我的插件
var PluginTrave = require('./plugins/traveFile');//我的插件
//PackagePlugin.main();



var entryJson = {},
    configPlugins = [
      new ExtractTextPlugin('[name].css'),
      /*new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
      })*/
      //new webpack.HotModuleReplacementPlugin()
    ],
    htmlPlugin;

/*var init = {
  entries: function(){
      fs.readdirSync(__dirname + '/src/pages/').forEach( function (file){
        entryJson[file + '/index'] = __dirname + '/src/pages/' + file + '/index.js';
        
        configPlugins.push(new HtmlWebpackPlugin({
            filename: file + '/index.html',
            chunks: [file + '/index'],
            //template: 'src/base/html/common.ejs'
        
            template : 'src/pages/' + file + '/index.ejs'
        }));
      });
  }
};*/

//整个文件加的index.js
//widget不能作为入口文件，作为入口文件，会使page找不到widgets
var init = {
  entries: function(){
    var fileList = PluginTrave.getFileList(['src/']);
    /*entryJson.app = [
            'webpack-dev-server/client?http://localhost:8080/'
    ];*/
    for(var i = 0; i < fileList.length; i++){
        if(path.basename(fileList[i]) == 'index.js'){
          if(path.dirname(fileList[i]).indexOf('widgets') >= 0){
            entryJson[path.dirname(fileList[i].replace('src\\', '')) + '\\index'] = [__dirname + '/' + path.normalize(fileList[i])];
          }else{
            entryJson[path.dirname(fileList[i].replace('src\\', '')) + '\\index'] = __dirname + '/' + path.normalize(fileList[i]);
          }
          configPlugins.push(new HtmlWebpackPlugin({
            filename: path.dirname(fileList[i]).replace('src\\', '') + '/index.html',
            chunks: [path.normalize(path.dirname(fileList[i]).replace('src\\', '') + '/index')],
          
            template : path.dirname(fileList[i]) + '/index.ejs',
            /*
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
            */
          }));
        }
    }
  }
};


init.entries();
var babelPresets = {presets: ['react', 'es2015']},
    packagePresets = {widgets: __dirname + '/src/widgets/'};//组件们所在的目录
module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: entryJson,
  output: {
      path: path.join(__dirname, "dist/"),//
      filename: "[name].js"
  },
 
  module: {
    loaders: [
      /*{
          test: /\.js$/,
          exclude: /node_modules/,
          loader:'package-loader'
      },*/
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel!package',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
        }
      },*/
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: 'ejs',
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader?'+JSON.stringify(babelPresets), 'widgets-loader?' + JSON.stringify(packagePresets)]//在webpack的module部分的loaders里进行配置即可
          /*query: {
            presets: ['es2015','react']
          }*/
      },
      

      { 
        test : /\.(less|css)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!less')
      },
      {
        // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: 'url?limit=1&name=../../base/images/[name].[hash:4].[ext]',
      }
    ]
  },
  /*devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },*/

  plugins: configPlugins,
};