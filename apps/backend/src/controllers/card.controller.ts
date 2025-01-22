import CardService from '../services/card.service';
import { Router } from 'express';
import { authenticateToken } from '../utils/token.service';

const router = Router();
const service = new CardService();

router.get('/', authenticateToken, (req, res) => {
    try {
        service.getCards(req).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', authenticateToken, (req, res) => {
    try {
        service.addCard(req.body).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/:id', authenticateToken, (req, res) => {
    try {
        service.deleteCard({"_id": req.params.id}).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;