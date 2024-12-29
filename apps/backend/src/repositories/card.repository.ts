import Card from '../models/card.model';

export async function getCards(req: any): Promise<any> {
    return await Card.find(req.query.message ? {message: req.query.message} : {});
}

export async function addCard(entity: any): Promise<void> {
    return await entity.save();
}

export async function deleteCard(entity: any): Promise<any> {
    return await Card.deleteOne(entity);
}