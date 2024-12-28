import { getCards } from '../services/card.service';

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

// router.post('/', async (req, res) => {
//     try {
//         const card = new Card(req.body);
//         await card.save();
//         res.send(card);
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500);
//     }
// });

// router.delete('/', async (req, res) => {
//     try {
//         const card = await Card.deleteOne(req.body);
//         res.send(card);
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500);
//     }
// });

export default router;