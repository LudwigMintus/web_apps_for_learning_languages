import User from '../models/user.model';

export async function getUsers(req: any): Promise<any> {
    return await User.find(req.query.message ? {message: req.query.message} : {});
}

export async function addUser(entity: any): Promise<void> {
    return await entity.save();
}

export async function deleteUser(entity: any): Promise<any> {
    return await User.deleteOne(entity);
}
