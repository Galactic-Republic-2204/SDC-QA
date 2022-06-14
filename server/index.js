require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const axios = require('axios');

const { cloudinary } = require('./utils/cloudinary')

app.use(express.static('client/dist'));

const compression = require('compression');
app.use(express.json());
app.use(compression());
app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}`); })

const routerQA = require('./routerQA.js');
app.use('/qa', routerQA);

console.log('??',app.get('env'));