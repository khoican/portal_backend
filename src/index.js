const express = require('express');
const app = express();

const midellwareGetRequest = require('./middleware/logs');
const router = require('./routes/api')

app.use(midellwareGetRequest);
app.use(router);

 app.listen(3000, () => {
    console.log('Server Running')
 });