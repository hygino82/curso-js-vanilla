//Variables & constants
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/', urlencodedParser, function (req, res) {
    let obj = {
        name: req.body.name,
        age: 26
    };
    res.json(obj);
});

let port = 3000 || process.env.PORT;
app.listen(port);