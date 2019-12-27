const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  price: String,
  locality: String,
  details: String
});

module.exports = mongoose.model("Listing", listingSchema);
