import { map, Observable } from "rxjs";
import ProgressMapper from "../mappers/progress.mapper";
import ProgressRepository from "../repositories/progress.repository";
import Progress from "../models/progress.model";

export default class ProgressService {

    mapper = new ProgressMapper();
    repo = new ProgressRepository();

    getUserCollections(entity: object): Observable<any> {
        return this.repo.getUserCollections(entity).pipe(map(value => {
            return value.map(value => this.mapper.mapTo(value))
        }));
    }
    
    addCollectionToUser(userId: any, collectionId: any): Observable<any> {
        const progress = {user: userId, collection: collectionId, isCompleted: false}
        const addedProgress = new Progress(this.mapper.mapFrom(progress))
        return this.repo.addCollectionToUser(addedProgress).pipe(map(value => this.mapper.mapTo(value)));
    }

    setCollectionProgress(progressId: any): Observable<void> {
        const progress = {_id: progressId}
        return this.repo.setCollectionProgress(progress);
    }

    resetCollectionProgress(progressId: any): Observable<void> {
        const progress = {_id: progressId}
        return this.repo.resetCollectionProgress(progress);
    }
    
    deleteCollectionFromUser(progressId: any): Observable<any> {
        const progress = {_id: progressId}
        return this.repo.deleteCollectionFromUser(progress);
    }

}