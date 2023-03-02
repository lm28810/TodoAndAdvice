const mongoose = require("mongoose")

const ItemsSchema = new mongoose.Schema({
    name: { type: String, required: true, }
});

const Items = mongoose.model("Items", ItemsSchema)

 module.exports = Items;