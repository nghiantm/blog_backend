const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 6868;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./src/routes/blogs.route.js")(app);
require("./src/routes/portfolio.route.js")(app);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const db = require("./src/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.get('/', (req, res) => {
    res.send('HELLO')
})
