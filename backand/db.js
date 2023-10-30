const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://UtsavDesai:Utsav_*_26@cluster0.qxlslid.mongodb.net/";

const mongoURI =
  "mongodb+srv://jay_gajera:Jay2003@cluster0.pv37rdy.mongodb.net/Doubtout";

const connectToMongo = () => {
  try {
    mongoose.connect(process.env.mongoURI || mongoURI, () => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
