import CollectionService from '../services/collection.service';
import { Router } from 'express';

const router = Router();
const service = new CollectionService();

router.get('/', (req, res) => {
    try {
        service.getCollections(req).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.post('/', (req, res) => {
    try {
        service.addCollection(req.body).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.delete('/:id', (req, res) => {
    try {
        service.deleteCollection({"_id": req.params.id}).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;