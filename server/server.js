const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');

let dataPath = path.join(__dirname, '../reddit.js');
let artPath = path.join(__dirname, '../popular-articles.json')
let downloadPath = path.join(__dirname, '../downloads/popular-downloader.js')


rp('https://reddit.com/r/popular.json')
.then(rawJSON => {
  const info = JSON.parse(rawJSON);

  info.data.children.forEach(article => {

    let id = article.data.id;
    let ext = path.extname(article.data.url);
    let fileName = id + ext;
    
    if (ext === '.jpg' || ext === '.png' || ext === '.gif') {
     
      rp(article.data.url, { encoding: 'base64' })
      .then(media => {
        fs.writeFile(path.join(__dirname, `../downloads/${fileName}`), media, { encoding: 'base64' }, (err) => {
          if (err) {
            console.log(err);
            return;
          }
        })
      })
      .catch(e => console.log('epic download fail'))

    }
  });
})
.catch(e => console.log('epic rawData fail'));
  // if(err) console.log(err);

  // let articles = [];

  // JSON.parse(body).data.children.forEach(item => {
    // fs.appendFileSync(dataPath,item.data.title + '\n');
    // fs.appendFileSync(dataPath,item.data.url + '\n');
    // fs.appendFileSync(dataPath,item.data.author + '\n');
    // articles.push(fs.appendFileSync(artPath,item.data.url + '\n'))
    // fs.appendFileSync(downloadPath,item.data.url + '\n');

    // console.log(item.data.url);



  



