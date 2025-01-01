import { ICard, ICardDto } from "../interfaces/card.interface";
import BaseMapper from "../utils/base.mapper";


export default class CardMapper implements BaseMapper<ICard, ICardDto>{
    mapTo(source: ICard): ICardDto {
        return {
            id: source._id,
            message: source.message,
            language: source.language,
            translation: source.translation,
            example: source.example,
            synonims: source.synonims
        };
    }
    
    mapFrom(destination: ICardDto): ICard {
        return {
            _id: destination.id,
            message: destination.message,
            language: destination.language,
            translation: destination.translation,
            example: destination.example,
            synonims: destination.synonims
        };
    }
}