

const mongoose = require('mongoose')
const dbConnection = async function () {
  try{
    const con =  await mongoose.connect(process.env.MONGO_URI,{})
  }
  catch (err) {
    console.log(err);
    process.exit(1)
  } 
};

// module.exports = dbConnection();
module.exports =  dbConnection ;
