import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import { from, Observable } from 'rxjs';
import { Document } from 'mongoose';

export default class UserRepository {

    getUsers(req: any): Observable<IUser[]> {
        return from(User.find(req.query.message ? {message: req.query.message} : {}).lean().exec());
    }
    
    addUser(entity: Document & IUser): Observable<IUser> {
        return from(entity.save());
    }
    
    deleteUser(entity: any): Observable<any> {
        return from(User.deleteOne(entity));
    }

}
