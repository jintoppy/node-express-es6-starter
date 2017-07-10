import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import ApiRouter from './routes/api';
import ejs from 'ejs';

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log('within middleware');
    console.log(req.url);
    next();
});
app.use(express.static('./public'));

app.use('/api', ApiRouter);
app.use('/', AppRouter);

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/api/users', (req, res) => {
    res
        .status(200)
        .json({
            message: 'trial'
        });
});

app.listen(3000, () => {
    console.log('listening on 3000');
});


