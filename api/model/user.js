module.exports = app => {


  const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  const userSchema = new Schema({
    token: { type: String, default: null },
    token_secret: { type: String, default: null }
  });
  const user = mongoose.model('User',userSchema)

  return user;
}