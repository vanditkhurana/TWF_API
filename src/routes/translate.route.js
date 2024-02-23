import express from 'express';
import translateController from '../controllers/translate.controller.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Translation API! Use the /translate endpoint for translation.' });
});
router.post('/translate', translateController.translate);

export default router;
