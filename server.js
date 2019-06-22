const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router');

app.use(express.json());
app.use(cors());
app.use('/', router);

app.listen(3000, function() {
    console.log('app start on 3000');
})
