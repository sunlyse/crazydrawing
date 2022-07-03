const express = require("express");
const app = express();
const compress = require("compression");
const fs = require("fs");
const port = 8080;

app.use(compress());
app.use(express.static(__dirname + "/"));

app.get('/', function() {
	fs.readFile('/en/' + req.params.pageName + '.html', function(err, data) {
		res.send(data.toString());
	})
})

app.get('/:lang/:pageName', function(req, res) {
	fs.readFile(req.params.lang + '/' + req.params.pageName + '.html', function(err, data) {
		res.send(data.toString());
	})
})

app.listen(port);
