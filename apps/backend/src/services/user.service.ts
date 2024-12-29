import { getUsers as getUserRepo, addUser as addUserRepo, deleteUser as deleteUserRepo } from "../repositories/user.repository";

export function getUsers(req: any): Promise<any> {
    return getUserRepo(req);
}

export function addUser(entity: any): Promise<any> {
    return addUserRepo(entity);
}

export function deleteUser(entity: object): Promise<object> {
    return deleteUserRepo(entity);
}