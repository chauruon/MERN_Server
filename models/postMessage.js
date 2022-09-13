import mongoose from "mongoose";

const postShema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    seletedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date(),
    },
});

const postMessage = mongoose.model("postMassge", postShema);

export default postMessage;
