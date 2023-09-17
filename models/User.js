const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // similar to destructuring const { Schema } = mongoose;

const userSchema = new Schema({
    googleID : String
});

mongoose.model("Users", userSchema);
