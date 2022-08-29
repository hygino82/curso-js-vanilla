'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
    res.send('Hello world!');
});

let port = 3000 || process.env.PORT;
app.listen(port);
