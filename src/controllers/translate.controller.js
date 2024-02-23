import translateModel from '../models/translate.model.js';

async function translate(req, res) {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Missing "text" in the request body' });
    }

    try {
        const translatedText = await translateModel.translateTextToFrench(text);
        res.json({ translation: translatedText });
    } catch (error) {
        res.status(500).json({ error: 'Translation failed' });
    }
}

export default {translate};