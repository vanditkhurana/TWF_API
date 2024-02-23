import express from 'express';
import bodyParser from 'body-parser';
import translateRoute from './src/routes/translate.route.js';

const app = express();

app.use(bodyParser.json());
app.use('/translate', translateRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});