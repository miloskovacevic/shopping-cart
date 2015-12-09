var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

app.listen(3000, function () {
    console.log('Server listening on  localhost:3000 ... ');
});
