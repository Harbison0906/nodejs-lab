const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile('chirps.json', (err, data) => {
  if (err) console.log(err);
  let chirpers = JSON.parse(data);
  console.log(chirpers);
});
