const mongoose = require("mongoose");
const db = mongoose;
const port = process.env.PORT || 8000;
const uri = "mongodb://localhost:27017/pixel"

module.exports = {port,db, uri}