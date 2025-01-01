import { Router } from 'express';
import ProgressService from '../services/progress.service';

const router = Router();
const service = new ProgressService();

router.get('/user/:user_id', (req, res) => {
    try {
        service.getUserCollections({"user": req.params.user_id}).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.post('/user/:user_id/collection/:collection_id', (req, res) => {
    try {
        service.addCollectionToUser(req.params.user_id, req.params.collection_id).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.post('/:progress_id/complete', (req, res) => {
    try {
        service.setCollectionProgress(req.params.progress_id).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.post('/:progress_id/reset', (req, res) => {
    try {
        service.resetCollectionProgress(req.params.progress_id).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

router.delete('/:progress_id', (req, res) => {
    try {
        service.deleteCollectionFromUser(req.params.progress_id).subscribe(resp => res.send(resp));
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
})

export default router;