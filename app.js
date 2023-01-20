const express = require('express');
const index_router = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

app.use('/', index_router);

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