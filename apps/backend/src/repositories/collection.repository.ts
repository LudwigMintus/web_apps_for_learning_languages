import Collection from '../models/collection.model';

export async function getCollections(req: any): Promise<any> {
    return await Collection.find(req.query.message ? {message: req.query.message} : {});
}

export async function addCollection(entity: any): Promise<void> {
    return await entity.save();
}

export async function deleteCollection(entity: any): Promise<any> {
    return await Collection.deleteOne(entity);
}