import { Types } from "mongoose";

export interface ICard {
    _id: typeof Types.ObjectId;
    message: string,
    language: string,
    translation: string,
    example?: string,
    synonims?: typeof Array<string>
}

export interface ICardDto {
    _id: typeof Types.ObjectId;
    message: string,
    language: string,
    translation: string,
    example?: string,
    synonims?: Array<string>
}