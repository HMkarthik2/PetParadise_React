import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;