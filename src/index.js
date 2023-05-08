require('dotenv').config();
const express = require('express');
const app = express();

const midellwareGetRequest = require('./middleware/logs');
const router = require('./routes/api')

app.use(midellwareGetRequest);
app.use(express.json());
app.use(router);

const port = process.env.PORT || 4000;
 app.listen(port, () => {
    console.log(`Server Runing in Port ${port}`)
 });