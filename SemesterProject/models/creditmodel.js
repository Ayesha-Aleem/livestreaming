const mongoose = require("mongoose");
//schema
const Schema = mongoose.Schema;
const credit = new Schema({
  name: String,
  credit: Number,
  
});
const  Credit = mongoose.model("Credit Card", credit);
module.exports =  Credit;