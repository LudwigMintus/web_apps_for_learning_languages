import { getUsers as getUserRepo } from "../repositories/user.repository";

export function getUsers(req: any): Promise<any> {
    return getUserRepo(req);
}