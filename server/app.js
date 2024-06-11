const express = require("express");
const app = express();

const port = `process.env.port | ${3000}`





app.listen(port, (req,res)=>{
    console.log(`Running pixelpages server on ${port}`);
})