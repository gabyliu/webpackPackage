# webpack_package
基于组件化开发的webpack脚手架
```
npm install webpack_package
```
安装构建工具

## task
1.初始化页面或组件
```
//cmd
npm run init
```
![此处输入图片的描述][1]

初始后的文件将会放在这两个目录

![此处输入图片的描述][2]

任务用的是这个插件，详情可看[plugin-package-init][3]

2.src/widgets/目录放的是组件，src/pages目录放的是页面

3.页面引用组件
比如，src/pages/widgetsList页面要引用src/widgets/checkBox这个组件
```
//src/pages/widgetsList/index.js
PACKAGE * as checkBox from "checkBox";//和es6的引用组件一致，只是将'import'改为'PACKAGE'，和不需要写checkBox的详细目录
```
用的是这个loader，详情可看[widgets-loader][4]

4.开发过程中。包括自动编译和更新代码
```
//cmd
webpack --watch
```

5.打包上线。包括压缩和加静态资源版本号
```
webpack --p
```



  [1]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM51nY8IaV38kmKsVvG3cPsN4ITWEoF8OSxA7jzHEhkG1duYh7D4aV4R/0
  [2]: http://mmbiz.qpic.cn/mmemoticon/Q3auHgzwzM6Mc3PlejPjtxribRFBhAWhmOskWmm1Rn06dPG5KVGo5VM9DETWqB8Go/0
  [3]: https://github.com/gabyliu/plugin-package-init
  [4]: https://www.npmjs.com/package/widgets-loader