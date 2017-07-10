import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log('within middleware');
    console.log(req.url);
    next();
});
app.use(express.static('./public'));


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


