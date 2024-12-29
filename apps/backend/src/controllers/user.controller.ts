import { getUsers, addUser, deleteUser } from '../services/user.service';
import User from '../models/user.model'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await getUsers(req);
        res.send(users);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        const card = new User(req.body);
        await addUser(card);
        res.send(card);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const card = await deleteUser({"_id": req.params.id});
        res.send(card);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;