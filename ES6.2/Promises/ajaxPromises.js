// cb pattern
function makeRequest(url, done, err) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => done(xhr.responseText);
  xhr.onerror = () => err(xhr.statusText);
  xhr.send();
}
makeRequest("https://jsonplaceholder.typicode.com/posts/1", ob => console.log(obj), err => console.log("Error: " + err))

// promise pattern
function makeRequestPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
makeRequestPromise("https://jsonplaceholder.typicode.com/posts/1")
.then(obj => console.log(obj))
.catch(err => console.log("Error: " + err))
