import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import AppRouter from './routes';
import ApiRouter from './routes/api';
import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:test123@ds153392.mlab.com:53392/node-trial');

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
app.listen(3000, () => {
    console.log('listening on 3000');
});


