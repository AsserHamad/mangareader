const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const port = 3000;
const app = express();
const exphbs = require('express-handlebars');

const main = require('./routes/main');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Routes
app.use('/', main);

app.use((err, req, res, next) => {
    console.log(err);
});

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});