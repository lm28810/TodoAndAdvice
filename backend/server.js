const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path")
const Router = require("./route");
const cors = require('cors')

const PORT = process.env.PORT || 4000; 
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors())
const uri = process.env.ATLAS_URI;
mongoose.connect( uri, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.use(express.static(path.join(__dirname, '../build')));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/",Router)



app.listen(PORT, ()=>{console.log("server running on " + PORT)})