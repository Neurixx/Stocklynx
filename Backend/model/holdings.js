const { model } = require("mongoose");

const { holdingsSchema } = require("../schemas/holdings.js");

const Holding = new model("Holding", holdingsSchema);

module.exports = Holding;
