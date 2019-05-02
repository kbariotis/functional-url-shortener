const R = require('ramda');
const parse = require('node-html-parser');
const axios = require('axios')

const incomingUrl = 'https://kostasbariotis.com';

// getHTML :: Promise p => String -> p String
const getHTML = axios.get

// parseHtml :: String -> Object
const parseHtml = parse.parse;

// queryTitle :: Object -> Object
const queryTitle = document => document.querySelector('html head title');

// extractTitleFromHtml :: String -> String
const extractTitleFromHtml = R.compose(R.prop('text'), queryTitle, parseHtml)

// getTitleFromUrl :: Promise p => String -> p String
const getTitleFromUrl = R.compose(R.then(extractTitleFromHtml), R.then(R.prop('data')), getHTML);

module.exports = {
  queryTitle,
  extractTitleFromHtml,
  getTitleFromUrl,
}
