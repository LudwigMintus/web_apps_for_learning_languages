import { Types } from "mongoose";
import { ICardDto } from "./card.interface";

export interface ICollection {
    _id: typeof Types.ObjectId;
    tags: typeof Array<string>
    cards: typeof Array<ICardDto>
}

export interface ICollectionDto {
    id?: typeof Types.ObjectId;
    tags: typeof Array<string>
    cards: typeof Array<ICardDto>
}