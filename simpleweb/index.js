const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world! Docker is the way to build');
});

app.listen(8080, () => {
    console.log('listening on port 8080!');
})