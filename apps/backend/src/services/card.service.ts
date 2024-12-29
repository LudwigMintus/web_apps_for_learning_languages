import { getCards as getCardRepo, addCard as addCardRepo, deleteCard as deleteCardRepo } from "../repositories/card.repository";

export function getCards(req: any): Promise<any> {
    return getCardRepo(req);
}

export function addCard(entity: any): Promise<any> {
    return addCardRepo(entity);
}

export function deleteCard(entity: any): Promise<any> {
    return deleteCardRepo(entity);
}