const mongoose = require('mongoose');

let connect = function(){
    let DB_URL = process.env.DB_URL;
    let options = {
        family: 4,
        maxPoolSize: 10,
        autoIndex: false
    }

    mongoose.connect(DB_URL, options);
    let db = mongoose.connection;

    db.once("open", ()=>{
        console.log("Connect to DB SUCCESS");
    });
    
    db.on("error", (error)=>{
        console.log("Connect to DB FAILED");
        console.log(error)
    })

    return db;
}


module.exports = connect;