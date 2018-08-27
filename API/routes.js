module.exports = function (app) {
    var busca = require('./controllers/busca');
    
    app.get('/busca/:param', busca.find);
}