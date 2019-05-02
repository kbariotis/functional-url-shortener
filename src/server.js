const R = require('ramda')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000;

const {getTitleFromUrl} = require('./shortener');

app.use(bodyParser.json());

// successResponse :: Object -> Object
const generateResponse = payload => ({
  success: true,
  response: payload,
  error: null
});
// generateSuccessUrlResponse :: String -> Object
const generateSuccessUrlResponse = shortenedUrl => generateResponse({
  url: shortenedUrl
});
// postController :: Function -> Function
const postController = handler => R.compose(R.then(res.send), R.then(generateSuccessUrlResponse), handler))

app.post('/generate', (req, res) => postController(getTitleFromUrl)(req.body.url))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
