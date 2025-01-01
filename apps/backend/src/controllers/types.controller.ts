import { Router } from "express";
import { LANGUAGES, TAGS } from "../models/models.const";


const router = Router();

router.get('/langs', (req, res) => {
    try {
        res.send(LANGUAGES);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

router.get('/tags', (req, res) => {
    try {
        res.send(TAGS);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

export default router;