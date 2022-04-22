var express = require('express');
var app     = express();
var jwt = require('jsonwebtoken');

const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'someotherrandomaccesstoken';
const refreshTokens = [];

const router = express.Router();

const users = [
    {
        email: 'peter@mit.edu',
        password: 'secret'
    }
]

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const user = users.find(u => {
        return u.email === email && u.password === password
    });

    console.log(user);

    /*if (user) {
        const accessToken = jwt.sign({ email: user.email }, accessTokenSecret, { expiresIn: '120m' });
        const refreshToken = jwt.sign({ email: user.email }, refreshTokenSecret, { expiresIn: '120m' });

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken
        })

    } else {
        res.send('Username or password incorrect');
    }*/
})

module.exports = router;