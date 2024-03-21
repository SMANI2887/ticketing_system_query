//  import library dotenv
require("dotenv").config();

const MONGODB = process.env.MONGODB_URL;
// console.log(MONGODB);
module.exports = {
  MONGODB,
};
