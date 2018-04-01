const path = require('path');
const ExtractTextPlugin= require('extract-text-webpack-plugin')

module.exports = {
	entry:path.resolve(__dirname,'src','js','index.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"bundle.js",
	},
	module:{
		rules:[
		//aqui van los loaders
		{
			test: /\.css$/, //que tipo de archivo quiero reconocer exp regular
			use: ExtractTextPlugin.extract({
				//['style-loader','css-loader']//que loader usar
				//fallback:'style-loader',
				use:'css-loader'
			}) 
		},
		{
			test: /\.js$/, 
			use: {
				loader:'babel-loader',
				options:{
					presets:['es2015','react']
				}
			}
		},
		{
			test:/\.(jpg|png|gif)$/,
			use:{
				loader:'url-loader',
				options:{
					limit:100000
				}
			}
		}
		]
	},
	plugins:[
	//aqui van os plugins
	new ExtractTextPlugin('css/[name].css')


	]
}