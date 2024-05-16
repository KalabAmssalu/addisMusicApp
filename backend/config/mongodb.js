//including mongoDb
const mongoose = require("mongoose");

//CONNECT TO DATABASE -------------------------------------------------------

const connectDatabase = async () => {
  try {
    
    const connection = await mongoose.connect(process.env.MONGO_URI);
    //listen to the server while running
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

//---------------------------------------------------------------------------

module.exports = connectDatabase;


