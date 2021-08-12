const mongoose = require("mongoose");
require("dotenv").config();

const connectionParams = {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.9i5s3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connection = mongoose.connect(uri,connectionParams).then(()=>console.log('Connected'))
.catch((err)=>console.log(err));

module.exports = connection