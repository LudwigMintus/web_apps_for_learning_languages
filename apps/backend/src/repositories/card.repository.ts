import Card from '../models/card.model';

export async function getCards(req: any): Promise<any> {
    return await Card.find(req.query.message ? {message: req.query.message} : {});
}