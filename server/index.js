import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRoute from "./routes/user.js";
dotenv.config();
const app = express();


mongoose.connect("mongodb://127.0.0.1:27017")
.then(() => console.log("DB connection is Successfull!"))
.catch((err) => {
    console.log(err)
});
app.use(express.json()); //its important to send data
app.use("/api/users", userRoute)
app.get("/api/test", (req, res) =>{
    res.send("I em from server")
})



const PORT = process.env.PORT || 5000;
console.log(PORT)
app.listen(PORT, () => console.log(`Server start on port ${PORT}!`))