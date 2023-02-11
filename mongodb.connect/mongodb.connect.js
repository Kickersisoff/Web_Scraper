const mongoose = require("mongoose");

const connectionString = 
"mongodb+srv://newuser:Neema123@cluster0.wom0s7n.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

 function connect(){
    try{
        const client = mongoose.connect(connectionString,{ useNewUrlParser: true });
        console.log("connected to mongodb");
        return client;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connect;