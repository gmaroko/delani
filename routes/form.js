const express = require("express");
const User = require("../models/user");

const form_router = express.Router();

form_router.post('/register', (req, res)=>{
    let new_user = User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    new_user.save();
    let payload = {};
    res.render('index', payload);
})

module.exports = form_router;