import { IProgress, IProgressDto } from "../interfaces/progress.interface";
import BaseMapper from "../utils/base.mapper";

export default class ProgressMapper implements BaseMapper<IProgress, IProgressDto>{
    mapTo(source: IProgress): IProgressDto {
        return {
            id: source._id,
            collection: source.collection,
            user: source.user,
            isCompleted: source.isCompleted
        };
    }
    
    mapFrom(destination: IProgressDto): IProgress {
        return {
            _id: destination.id,
            collection: destination.collection,
            user: destination.user,
            isCompleted: destination.isCompleted
        };
    }
}