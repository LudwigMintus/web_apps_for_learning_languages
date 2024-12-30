import { getCards, addCard, deleteCard } from '../services/card.service';
import Card from '../models/card.model'
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const cards = await getCards(req);
        res.send(cards);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        const card = new Card(req.body);
        await addCard(card);
        res.send(card);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const card = await deleteCard({"_id": req.params.id});
        res.send(card);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;