import { IUser, IUserDto } from "../interfaces/user.interface";
import BaseMapper from "../utils/base.mapper";

export default class UserMapper implements BaseMapper<IUser, IUserDto>{
    mapTo(source: IUser): IUserDto {
        return {
            id: source._id,
            email: source.email,
            password: source.password
        };
    }
    
    mapFrom(destination: IUserDto): IUser {
        return {
            _id: destination.id,
            email: destination.email,
            password: destination.password
        };
    }
}