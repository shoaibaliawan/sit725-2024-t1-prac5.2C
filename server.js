
// server.js

const express = require("express");
const app = express();
const { runDB } = require('./modal');
const route = require('./route');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', route);

app.listen(port, () => {
    console.log('express server started');
    runDB();
});
