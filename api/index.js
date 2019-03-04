const express = require('express')
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')
const axios = require('axios')
const app = express()

app.get('/',async (req, res, next) => {
  res.send("SEVER WORK WELL!!!")
})

app.use(bodyParser.json());

app.use (bodyParser.urlencoded ({
	extended: true
}));



app.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  const valid = username === 'admin' && password === "123";

  if (!valid) {
    return res.json({
      error: "Invalid username or password"
    });
  }

  const accessToken = jsonwebtoken.sign(
    {
      username,
      name: 'User ' + username,
      scope: ['test', 'user']
    },
    'dummy'
  )

  res.json({
    accessToken
  })
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}