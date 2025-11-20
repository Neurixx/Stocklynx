require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGO_URL;
const Holding = require("./model/holdings.js");
const Position = require("./model/positions.js");
const Order = require("./model/orders.js");

app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => console.log("Connection succesful!"))
  .catch((e) => console.log(e));

async function main() {
  await mongoose.connect(DB_URL);
}

app.get("/holdings", async (req, res) => {
  let holdings = await Holding.find({});
  res.send(holdings);
});

app.get("/positions", async (req, res) => {
  let positions = await Position.find({});
  res.send(positions);
});

app.post("/order", async (req, res) => {
  let { name, qty, price, mode } = req.body;
  let newOrder = new Order({
    name,
    qty,
    price,
    mode,
  });

  await newOrder.save();
  res.send("Order Saved");
});

app.listen(PORT, () => {
  console.log("App is listening to the port.");
});
