// const translate = require('translate');
import translate from "translate";

async function translateTextToFrench(text) {
    try {
        const translatedText = await translate(text, 'fr');
        return translatedText;
    } catch (error) {
        throw error;
    }
}

export default {translateTextToFrench};