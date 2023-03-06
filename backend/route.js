const express = require('express');
const { default: mongoose } = require('mongoose');
const router = require('express').Router();
const ItemsModel = require("./models");
const app = express();



app.post("/add", async (req, res) => {
    const item = new ItemsModel(req.body);
  
    try {
      await item.save();
      res.send(item);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.get("/item", async (req, res) => {
  const getItem = await ItemsModel.find({});

  try {
    res.send(getItem);
  } catch (error) {
    res.status(500).send(error);
  };
});
   app.delete ('/:id', async (req, res) => {
  const deleteItem = await ItemsModel.findByIdAndDelete(req.params.id)
    .then(() => res.json(' Deleted.'))
    .catch(err => res.status(500).json('Error: ' + err));
   });

   app.post('/update/:id', async (req, res) => {
  const updateItem =  await ItemsModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      console.log("update line is being hit");
      res.json('updated');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json('Error: ' + err);
    });
   });

   app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = app