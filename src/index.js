const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { error } = require('winston');

const app = express();


app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, ()=> {
    console.log(`Successful started the server on PORT : ${ServerConfig.PORT}`);
});