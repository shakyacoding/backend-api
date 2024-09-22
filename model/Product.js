const mongoose = require('mongoose')
const { Schema } = mongoose;

//schema
const productSchema = new Schema({
  title: {type: String, required:true, unique: true},
  price: {type: Number, min:[0, 'Wrong Price'], required: true},
  rating: {type: Number, min:[0, 'Wrong min rating'], max:[5, 'Wrong max rating'], required: true}
});

exports.Product = mongoose.model('Product', productSchema)  // Here Product is collection name