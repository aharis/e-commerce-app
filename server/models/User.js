import mongoose from "mongoose";
import boolean from "webidil-conversions";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: boolean,
        default: false,
    },

},
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;