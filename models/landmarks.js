const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LandmarkSchema = new Schema({
  name: String,
  address: String,
  comments: String,
  imageURL: String
  //_city: {type: Schema.Types.ObjectId, ref: 'City'}
});

let Landmark = mongoose.model("Landmark", LandmarkSchema);

module.exports = Landmark;
