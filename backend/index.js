const express = require('express');

const app = express();

app.get('/', (request, response) => { 
    return response.json({
        evento: 'Gabil',
        aluno: 'Ga'
    });
});

app.listen(3333);