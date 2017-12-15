const fs = require("fs");

// fs.readFile("test.json", (err, data) => {
//   if (err) {return console.log(err); }
//   console.log(JSON.parse(data));
// })

function getData(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {return reject(err); }
      resolve(data);
    })
  });
}

getData("test.json")
  .then(json => console.log(JSON.parse(data)))
  .catch(err => console.log(err));


  function writeData(fileName, letter) {
      return new Promise((resolve, reject) => {
          fs.writeFile(fileName, JSON.stringify(letter),(err, data) => {
              if(err) {
                  reject('reject');
              } else {
                  resolve('Well done');
              }
          })
      });
  }

  writeData("test.json", {"b": "balloon"})
  .then(data => console.log(data))
  .catch(err => console.log(err));
