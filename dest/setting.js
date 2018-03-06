
			const config = require('./config.js')
			const modules = [
	{
		"name": "buildtask-build-webpage",
		"description": "网页编译基础流程",
		"devDependencies": {
			"merge-stream": "^1.0.1",
			"del": "^3.0.0",
			"gulp-changed": "^1.3.0",
			"gulp-ng-annotate": "^1.1.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/build-webpage",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\build-webpage\\index.js",
		"mainDest": "buildtask-build-webpage\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-install",
		"description": "安装npm和bower依赖",
		"dependencies": {
			"brickyard-cli": "^4.2.0"
		},
		"devDependencies": {
			"bower": "^1.8.0",
			"fs-extra": "^3.0.1",
			"gulp-json-editor": "^2.2.1",
			"gulp-load-plugins": "^1.2.4",
			"lodash": "^4.6.1"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/install",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\install\\index.js",
		"mainDest": "buildtask-install\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-watch",
		"description": "监控文件改动，热启动程序",
		"devDependencies": {
			"gulp-livereload": "^3.8.0",
			"chokidar": "^1.6.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/watch",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\watch\\index.js",
		"mainDest": "buildtask-watch\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-babel",
		"description": "webpack程序的babel编译流程",
		"devDependencies": {
			"babel-core": "^6.26.0",
			"babel-loader": "^7.1.2",
			"babel-polyfill": "^6.26.0",
			"babel-preset-env": "^1.6.0",
			"babel-preset-stage-2": "^6.24.1",
			"lodash": "^4.17.4"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/babel",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\babel\\index.js",
		"mainDest": "buildtask-webpack-babel\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-build",
		"description": "webpack程序的基础编译流程",
		"devDependencies": {
			"fs-extra": "^4.0.1",
			"gulp-data": "^1.2.1",
			"gulp-template": "^4.0.0",
			"lodash": "^4.17.4",
			"webpack": "^3.5.5"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/build",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\build\\index.js",
		"mainDest": "buildtask-webpack-build\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-common-shim",
		"description": "webpack程序的特殊依赖库路径修正",
		"devDependencies": {
			"lodash": "^4.6.1",
			"exports-loader": "^0.6.3",
			"expose-loader": "^0.7.1",
			"imports-loader": "^0.6.5"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/common-shim",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\common-shim\\index.js",
		"mainDest": "buildtask-webpack-common-shim\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-css",
		"description": "webpack程序的css加载",
		"devDependencies": {
			"css-loader": "^0.28.5",
			"do-nothing-loader": "^1.0.0",
			"extract-text-webpack-plugin": "^3.0.0",
			"lodash": "^4.17.4",
			"style-loader": "^0.18.2"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/css",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\css\\index.js",
		"mainDest": "buildtask-webpack-css\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-ng-annotate",
		"description": "webpack程序的angular annotate修正",
		"devDependencies": {
			"lodash": "^4.6.1",
			"ng-annotate-loader": "^0.1.0"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/ng-annotate",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\ng-annotate\\index.js",
		"mainDest": "buildtask-webpack-ng-annotate\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-ng-cache",
		"description": "webpack程序的angular html模板加载",
		"devDependencies": {
			"lodash": "^4.6.1",
			"ng-cache-loader": "0.0.15"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/ng-cache",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\ng-cache\\index.js",
		"mainDest": "buildtask-webpack-ng-cache\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-resource",
		"description": "webpack程序的静态资源加载",
		"devDependencies": {
			"file-loader": "^1.1.5",
			"lodash": "^4.17.4",
			"url-loader": "^0.6.2"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/resource",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\resource\\index.js",
		"mainDest": "buildtask-webpack-resource\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-scss",
		"description": "webpack程序的scss编译",
		"devDependencies": {
			"css-loader": "^0.28.5",
			"extract-text-webpack-plugin": "^3.0.0",
			"lodash": "^4.17.4",
			"node-sass": "^4.5.3",
			"resolve-url-loader": "^2.1.0",
			"sass-loader": "^6.0.6",
			"style-loader": "^0.18.2"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/scss",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\scss\\index.js",
		"mainDest": "buildtask-webpack-scss\\index.js",
		"type": "buildtask"
	},
	{
		"name": "buildtask-webpack-split-vendor",
		"description": "split vendor js from frontend main.js",
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/buildtask/webpack/split-vendor",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\buildtask\\webpack\\split-vendor\\index.js",
		"mainDest": "buildtask-webpack-split-vendor\\index.js",
		"type": "buildtask"
	},
	{
		"name": "webpack-dev-server",
		"description": "buildtask for webpack-dev-server",
		"dependencies": {
			"express": "^4.15.4",
			"http-proxy-middleware": "^0.17.4",
			"morgan": "^1.8.2",
			"webpack-dev-middleware": "^1.12.0",
			"webpack-dev-server": "^2.7.1",
			"webpack-hot-middleware": "^2.18.2"
		},
		"scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		},
		"path": "D:/nodejs/node_global/node_modules/brickyard-cli/brickyard_modules/framework/webserver/webpack-dev-server",
		"main": "index.js",
		"mainSrc": "D:\\nodejs\\node_global\\node_modules\\brickyard-cli\\brickyard_modules\\framework\\webserver\\webpack-dev-server\\index.js",
		"mainDest": "webpack-dev-server\\index.js",
		"type": "buildtask"
	}
]
			module.exports = { config, modules, }
		