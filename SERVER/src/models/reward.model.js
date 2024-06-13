import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskrewardSchema = new Schema({
    taskname: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "completed"]
    },
    points: {
        type: Number,
        default: 0
    },
    completedAt: {
        type: Date
    }
}, {
    timestamps: true
});

export const Taskreward = mongoose.model("Taskreward", taskrewardSchema);
