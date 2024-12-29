import { getCollections as getCollectionRepo, addCollection as addCollectionRepo, deleteCollection as deleteCollectionRepo } from "../repositories/collection.repository";

export function getCollections(req: any): Promise<any> {
    return getCollectionRepo(req);
}

export function addCollection(entity: any): Promise<any> {
    return addCollectionRepo(entity);
}

export function deleteCollection(entity: any): Promise<any> {
    return deleteCollectionRepo(entity);
}