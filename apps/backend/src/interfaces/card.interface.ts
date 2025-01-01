import { Types } from "mongoose";

export interface ICard {
    _id: typeof Types.ObjectId;
    message: string,
    language: string,
    translation: string,
    example?: string,
    synonims?: typeof Array<string>,
    __v?: number;
}

export interface ICardDto {
    id?: typeof Types.ObjectId;
    message: string,
    language: string,
    translation: string,
    example?: string,
    synonims?: typeof Array<string>
}