import { ICollection, ICollectionDto } from "../interfaces/collection.interface";
import BaseMapper from "../utils/base.mapper";


export default class CollectionMapper implements BaseMapper<ICollection, ICollectionDto>{
    mapTo(source: ICollection): ICollectionDto {
        return {
            id: source._id,
            tags: source.tags,
            cards: source.cards
        };
    }
    
    mapFrom(destination: ICollectionDto): ICollection {
        return {
            _id: destination.id,
            tags: destination.tags,
            cards: destination.cards
        };
    }
}