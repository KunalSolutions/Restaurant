import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: 'RESTAURANT'
    }).then (()=>{
        console.log('Connected to databse successfully!');
    }).catch(err=> {
        console.log(`some error occured while connedting to database! ${err}`);
    });
}


