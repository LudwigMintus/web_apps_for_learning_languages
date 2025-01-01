import { from, Observable } from 'rxjs';
import Card from '../models/card.model';

export default class CardRepository {

    getCards(req: any): Observable<any> {
        return from(Card.find(req.query.message ? {message: req.query.message} : {}));
    }
    
    addCard(entity: any): Observable<any> {
        return from(entity.save());
    }
    
    deleteCard(entity: any): Observable<any> {
        return from(Card.deleteOne(entity));
    }

}