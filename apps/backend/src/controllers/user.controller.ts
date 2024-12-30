import UserService from '../services/user.service';
import { IUserDto } from '../interfaces/user.interface';
import { Router } from 'express';

const router = Router();
const service = new UserService();

router.get('/', (req, res) => {
    try {
        service.getUsers(req).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', (req, res) => {
    try {
        service.addUser(req.body as IUserDto).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        service.deleteUser({"_id": req.params.id}).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;