import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        optionText: {
            type: String,
            required: true
        },
        optionNumber: {
            type: Number,
            required: true
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to User model
    }
});

export const MCQ = mongoose.model('MCQ', mcqSchema);
