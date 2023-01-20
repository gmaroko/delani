const express = require('express');
const index_router = require('./routes/index');
const form_router = require('./routes/form');
const db_connect = require('./config/db');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json()); // application/json
app.use(express.urlencoded({extended: true})); // body-parser

app.use('/', index_router);
app.use('/', form_router);

let db = db_connect();

let PORT = process.env.PORT;

if(!PORT){
    PORT = 5500;
    console.log("Setting custom port = " + PORT);
} else {
    console.log("Setting default port = " + PORT);
}

app.listen(PORT, ()=>{
    console.log("Application startup success!");
});