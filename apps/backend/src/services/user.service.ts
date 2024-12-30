import User from '../models/user.model'
import { IUserDto } from "../interfaces/user.interface";
import UserRepository from "../repositories/user.repository";
import UserMapper from '../mappers/user.mapper';
import { map, Observable } from 'rxjs';

export default class UserService {

    mapper = new UserMapper();
    repository = new UserRepository();

    getUsers(req: any): Observable<IUserDto[]> {
        return this.repository.getUsers(req).pipe(map(value => {
            return value.map(value => this.mapper.mapTo(value))
        }))
    }

    addUser(entity: IUserDto): Observable<IUserDto> {
        const addedEntity = new User(this.mapper.mapFrom(entity));
        return this.repository.addUser(addedEntity).pipe(map(value => this.mapper.mapTo(value)));
    }

    deleteUser(entity: object): Observable<object> {
        return this.repository.deleteUser(entity);
    }

}