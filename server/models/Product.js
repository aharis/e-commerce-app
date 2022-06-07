import mongoose from "mongoose";
import boolean from "webidil-conversions";

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String, rquired: true, unique: true
    }
})