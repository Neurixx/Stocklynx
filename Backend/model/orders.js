const { model } = require("mongoose");
const { orderSchema } = require("../schemas/orders.js");

const Order = new model("Order", orderSchema);

module.exports = Order;
