require('dotenv').config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI

// const URI = "mongodb://127.0.0.1:27017/mern_admin";  => mern_admin --> file name
// const URI = "mongodb+srv://kishan:kishan@cluster0.hnplipx.mongodb.net/mern_admin?retryWrites=true&w=majority";

// const URI = "mongodb+srv://kishan:kishan@cluster0.hnplipx.mongodb.net/sample_mflix"; 

mongoose.connect(URI);

const connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log('connection successful to DB');
    }catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;