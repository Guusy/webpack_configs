const path = require('path');

module.exports = {
	entry:path.resolve(__dirname,'index.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"bundle.js",
	},
	module:{
		rules:[
		//aqui van los loaders
		{
			test: /\.css$/, //que tipo de archivo quiero reconocer exp regular
			use: ['style-loader','css-loader']//que loader usar
		}
		]
	}
}