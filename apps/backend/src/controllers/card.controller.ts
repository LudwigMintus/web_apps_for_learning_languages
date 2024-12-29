import { getCards, addCard, deleteCard } from '../services/card.service';
import Card from '../models/card.model'

const express = require('express');
const router = express.Router();

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

router.delete('/', async (req, res) => {
    try {
        const card = await deleteCard(req.body);
        res.send(card);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;