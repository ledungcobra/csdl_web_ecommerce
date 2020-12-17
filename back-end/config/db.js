import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    console.log(`Connecting to db successfully: ${conn.connection.host}`.cyan.underline);

    }catch(e){
        console.log(`Error : ${e}`.red.bold.underline);
        process.exit(1);
    }
}

export default connectDB;