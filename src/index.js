const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const midellwareGetRequest = require('./middleware/logs');
const router = require('./routes/api');

app.use(midellwareGetRequest);
app.use(express.json());
app.use(cors())

app.use('/portal', router);

const port = process.env.PORT || 4000;
 app.listen(port, () => {
    console.log(`Server Runing in Port ${port}`)
 });