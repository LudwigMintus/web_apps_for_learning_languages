import { getCollections, addCollection, deleteCollection } from '../services/collection.service';
import Collection from '../models/card.model'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const collections = await getCollections(req);
        res.send(collections);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        const collection = new Collection(req.body);
        await addCollection(collection);
        res.send(collection);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/', async (req, res) => {
    try {
        const collection = await deleteCollection(req.body);
        res.send(collection);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;