import { from, Observable } from 'rxjs';
import Collection from '../models/collection.model';

export default class CollectionRepository {

    getCollections(req: any): Observable<any> {
        return from(Collection.find(req.query.message ? {message: req.query.message} : {}));
    }
    
    addCollection(entity: any): Observable<any> {
        return from(entity.save());
    }
    
    deleteCollection(entity: any): Observable<any> {
        return from(Collection.deleteOne(entity));
    }

}