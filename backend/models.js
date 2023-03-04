const mongoose = require("mongoose")

const ItemsSchema = new mongoose.Schema({
    name: {
        type: String, required: true,
        minlength: 3,
        maxlength: 50
    }
});

const Items = mongoose.model("Items", ItemsSchema)

 module.exports = Items;