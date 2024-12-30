import { Types } from "mongoose";
import { ICardDto } from "./card.interface";

export interface ICollection {
    _id: typeof Types.ObjectId;
    types: typeof Array<string>
    users: typeof Array<string>
    cards: typeof Array<ICardDto>
}

export interface ICollectionDto {
    id?: typeof Types.ObjectId;
    types: Array<string>
    users: Array<string>
    cards: Array<ICardDto>
}