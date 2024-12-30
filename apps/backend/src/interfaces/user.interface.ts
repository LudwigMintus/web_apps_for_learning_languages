import { Types } from "mongoose";

export interface IUser {
    _id: typeof Types.ObjectId;
    email: string;
    password: string;
    __v?: number;
}

export interface IUserDto {
    id?: typeof Types.ObjectId;
    email: string;
    password: string;
}