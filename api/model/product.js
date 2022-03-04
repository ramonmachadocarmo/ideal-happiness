module.exports = app => {


  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  const productSchema = new Schema({
    name: { type: String, default: null },
    description: { type: String, default: null }
  });
  const product = mongoose.model('Product', productSchema)

  return product;
}