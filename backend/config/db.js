import mongoose from "mongoose"

const connectDb=async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("db_connected")
    } catch (error) {
       console.log(db_error); 
    }
}

export default connectDb