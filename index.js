//  import library mongoose
const mongoose = require('mongoose');
const config = require('./utils/config');

console.log('Connecting to MongoDB');

// connect to mongoDB
mongoose
  .connect(config.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
