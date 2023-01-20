const express = require("express");
const index_router = express.Router();

index_router.get('/', (req, res)=>{
    let payload = {};
    res.render('index', payload);
})

module.exports = index_router;