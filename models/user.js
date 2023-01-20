const mongoose = require("mongoose");

let user = {
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String},
    email: {type: String},
    password: {type: String}
}

let user_schema = new mongoose.Schema(user);

let User = mongoose.model("User", user_schema);


module.exports = User;

