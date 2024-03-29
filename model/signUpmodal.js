const mongoose = require('mongoose');

const schemaSignUp = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
    name:String,
    username:String,
    password:String
},{timestamps:true}
);

const SignUpModel = mongoose.model('SignUpModel', schemaSignUp);

module.exports = {SignUpModel};
