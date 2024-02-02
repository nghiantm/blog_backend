const express = require('express');
const app = express();

const cors = require('cors');

const port = process.env.PORT || 68686;

app.use(cors());

app.get('/', (req, res) => {
    res.send('HELLO')
})

app.listen(port, () => {
    console.log(`EXAMPLE run on: ${port}`)
})