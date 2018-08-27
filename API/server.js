var express = require('express'),
	bodyParser = require('body-parser'),
    port = 8080,
    app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type, enctype, accept, authorization, x-access-token");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

require('./routes')(app);

app.listen(port);

console.log('Servidor HTTP esta escutando na porta ' + port);