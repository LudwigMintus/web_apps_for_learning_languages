import { getUsers } from '../services/user.service';

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

// router.post('/', async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.send(user);
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500);
//     }
// });

// router.delete('/', async (req, res) => {
//     try {
//         const user = await User.deleteOne(req.body);
//         res.send(user);
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500);
//     }
// });

export default router;