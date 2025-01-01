import Card from '../models/card.model'
import { map, Observable } from "rxjs";
import CardRepository from "../repositories/card.repository";
import CardMapper from "../mappers/card.mapper";
export default class CardService {

    mapper = new CardMapper()
    repository = new CardRepository();

    getCards(req: any): Observable<any> {
        return this.repository.getCards(req).pipe(map(value => {
            return value.map(value => this.mapper.mapTo(value))
        }));
    }
    
    addCard(entity: any): Observable<any> {
        const addedEntity = new Card(this.mapper.mapFrom(entity));
        return this.repository.addCard(addedEntity).pipe(map(value => this.mapper.mapTo(value)));
    }
    
    deleteCard(entity: object): Observable<object> {
        return this.repository.deleteCard(entity);
    }

}