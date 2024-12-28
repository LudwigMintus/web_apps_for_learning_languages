import User from '../models/user.model';

export async function getUsers(req: any): Promise<any> {
    return await User.find(req.query.message ? {message: req.query.message} : {});
}
