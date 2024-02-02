const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 68686;
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

app.get('/', (req, res) => {
    res.send('HELLO')
})