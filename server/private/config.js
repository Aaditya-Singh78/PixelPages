const mongoose = require("mongoose");
const db = mongoose;
const port = process.env.PORT || 8000;
const uri = "mongodb://localhost:27017/pixel"
const { v4: uuidv4 } = require('uuid');
const writerId = uuidv4();

module.exports = {port,db, uri, writerId}