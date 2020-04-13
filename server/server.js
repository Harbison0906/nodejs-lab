const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

let dataPath = path.join(__dirname, '../reddit.js');

rp('https://reddit.com/r/popular.json', (err, res, body) => {
  if(err) console.log(err);

  let articles = [];

  JSON.parse(body).data.children.forEach(item => {
    // fs.appendFileSync(dataPath,item.data.title + '\n');
    // fs.appendFileSync(dataPath,item.data.url + '\n');
    // fs.appendFileSync(dataPath,item.data.author + '\n');
    articles.push(fs.appendFileSync(dataPath,item.data.url + '\n'))
    console.log(articles);
  });
  

});
