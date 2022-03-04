const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DATABASE,
} = process.env

const options = {
  useNewUrlParser: true,
  connectTimeoutMS: 10000,
};

const prodSchema = mongoose.Schema({
  name: String,
  description: String,
  value: Number
})

const url =
  `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

mongoose.connect(url, options).then(function () {
  console.log('MongoDB conectado...');
  mongoose.model("product", prodSchema)
})
  .catch(function (err) {
    console.log(err);
  });