import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json(
        [
            'Diego',
            'Mario',
            'Carlos',
            'Daniel',
            'Maria'
        ]);
});

app.listen(3333)