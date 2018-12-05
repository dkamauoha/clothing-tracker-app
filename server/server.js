const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const AWS = require('aws-sdk');
require('dotenv').config();

const app = express();

//Middlewares
app.use(bodyParser.json());

//Destructuring from .env
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

//Amazon S3 Setup
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

const S3 = new AWS.S3();

//Session Setup
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            name: '',
            email: '',
            user_id: '',
            profile_pic: ''
        };
    };
    next();
});

//Massive
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`Server running on Port: ${SERVER_PORT}`))
})

//Endpoints

//Amazon S3
app.post('/api/s3', (req, res) => {
    const photo = req.body;
    const buf = new Buffer(photo.file.replace(/^data:image\/w+;base64,/, ''), 'base64');
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Body: buf,
        Key: photo.filename,
        ContentType: photo.filetype,
        ACL: 'public-read'
    };
    S3.upload(params, (err, data) => {
        if (err) {
            response = err;
            code = 500;
        } else {
            response = data;
            code = 200;
        }
        res.status(code).send(response);
    })
})


//test
app.get('/api/test', (req, res) => {
    res.send('Success');
});
