const { model } = require("mongoose");
const { positionSchema } = require("../schemas/positions.js");

const Position = new model("Position", positionSchema);

module.exports = Position;
