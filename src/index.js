const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

// const {sendBasicEmail} = require('./services/email-service')
const cron = require('node-cron');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
        
        cron.schedule('* * * * *', () => {
            console.log('running a task after every minute')
        })
    });
}

setupAndStartServer();