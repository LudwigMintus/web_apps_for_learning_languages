import { getCards as getCardRepo } from "../repositories/card.repository";

export function getCards(req: any): Promise<any> {
    return getCardRepo(req);
}