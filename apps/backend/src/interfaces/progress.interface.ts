import { Types } from "mongoose";


export interface IProgress {
    _id: typeof Types.ObjectId,
    collection: typeof Types.ObjectId,
    user: typeof Types.ObjectId,
    isCompleted: boolean,
    __v?: number;
}

export interface IProgressDto {
    id?: typeof Types.ObjectId,
    collection: typeof Types.ObjectId,
    user: typeof Types.ObjectId,
    isCompleted: boolean
}