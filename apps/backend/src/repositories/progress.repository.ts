import { from, Observable } from "rxjs";
import Progress from "../models/progress.model";


export default class ProgressRepository {

    getUserCollections(req: any): Observable<any> {
        return from(Progress.find(req ?? {}).lean().exec());
    }
    
    addCollectionToUser(entity: any): Observable<any> {
        return from(entity.save());
    }

    setCollectionProgress(id: any): Observable<any> {
        return from(Progress.findByIdAndUpdate(id, { isCompleted: true }, { new: true }));
    }

    resetCollectionProgress(id: any): Observable<any> {
        return from(Progress.findByIdAndUpdate(id, { isCompleted: false }, { new: true }));
    }
    
    deleteCollectionFromUser(entity: any): Observable<any> {
        return from(Progress.deleteOne(entity));
    }

}