import { Schema, Types, model } from "mongoose";
import { IProgress } from "../interfaces/progress.interface";

const progressSchema = new Schema<IProgress>({
    __v: { 
        type: Number, 
        select: false 
    },
    collection: {
        type: Types.ObjectId, 
        ref: 'Collection',
        required: true
    },
    user: {
        type: Types.ObjectId, 
        ref: 'User',
        select: false,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    }
})

const Progress = model<IProgress>("Progress", progressSchema);

export default Progress;