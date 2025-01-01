import { map, Observable } from "rxjs";
import CollectionRepository from "../repositories/collection.repository";
import CollectionMapper from "../mappers/collection.mapper";
import Collection from "../models/collection.model";

export default class CollectionService {

    mapper = new CollectionMapper()
    repo = new CollectionRepository();

    getCollections(req: any): Observable<any> {
        return this.repo.getCollections(req).pipe(map(value => {
            return value.map(value => this.mapper.mapTo(value))
        }));
    }
    
    addCollection(entity: any): Observable<any> {
        const addedEntity = new Collection(this.mapper.mapFrom(entity));
        return this.repo.addCollection(addedEntity).pipe(map(value => this.mapper.mapTo(value)));
    }
    
    deleteCollection(entity: any): Observable<any> {
        return this.repo.deleteCollection(entity);
    }

}