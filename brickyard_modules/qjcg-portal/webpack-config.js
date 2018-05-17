'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	plugins: [
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('index.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('aboutUs.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('download.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('equipment.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('faq.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('feature.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('service.html')),
		new HtmlWebpackPlugin(HtmlWebpackPluginConfig('solution.html')),
	],
}

function HtmlWebpackPluginConfig (path) {
	return {
		filename: path,
		template: `html-loader?interpolate&attrs=img:src!${__dirname}/${path}`,
		inject: 'head',
	}
}
