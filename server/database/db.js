import mongoose, { connect } from "mongoose";

const Connection = async(USERNAME,PASSWORD) => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-xyhxyfk-shard-00-00.xqmbrnd.mongodb.net:27017,ac-xyhxyfk-shard-00-01.xqmbrnd.mongodb.net:27017,ac-xyhxyfk-shard-00-02.xqmbrnd.mongodb.net:27017/?ssl=true&replicaSet=atlas-t7tlmo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URL,{useNewUrlParser: true});

        console.log('database connected successfully');

    } catch (error) {
        console.log('error while connecting with the database',error);
    }
}

export default Connection;