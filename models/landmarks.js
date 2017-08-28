const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LandmarkSchema = new Schema({
  name: String,
  address: String,
  comments: String,
  imageURL: String
  //_city: {type: Schema.Types.ObjectId, ref: 'City'}
<<<<<<< HEAD
})

=======
});
>>>>>>> 4b34c7554426d6783e2540464d0b72f7b8293e61

let Landmark = mongoose.model("Landmark", LandmarkSchema);

module.exports = Landmark;
