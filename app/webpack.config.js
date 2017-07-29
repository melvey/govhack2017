var fs = require('fs');

// The general template is fine to use as a config so put that in if it is missing
if(!fs.existsSync('./src/config/general.js')) {
	fs.createReadStream('./src/config/templates/general.js').pipe(fs.createWriteStream('./src/config/general.js'));
}


var appConfig = require('./webpack-config/webpack.app.config');
var serverConfig = require('./webpack-config/webpack.server.config');

module.exports = [appConfig, serverConfig];

