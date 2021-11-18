import express from 'express';
import siteRouter from './routes/site.js'

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(siteRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});