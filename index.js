var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');
//const axios = require('axios').default;

var authRouter = require('./auth.js');
//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());
app.use('./auth', authRouter);



/*const jwt = require ('jsonwebtoken');

const accessTokenSecret = 'somerandomaccesstoken';

const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);

    if(authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                console.log(err);
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        })
    } else {
        res.sendStatus(401);
    }
};*/



//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name,req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// all accounts
app.get('/account/all', function (req, res) {
    
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

// update user account
app.get('/account/update/:email/:balance', function (req, res) {
    // else create user
    dal.update(req.params.email,req.params.balance).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// find account
app.get('/account/findOne/:email', function (req, res) {
    
    dal.findOne(req.params.email).
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);