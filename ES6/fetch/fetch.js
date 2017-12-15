fetch('https://jsonplaceholder.typicode.com');
.then(response => {console.log(response)})


/* Getting data with fetch.

fetch('https://api.github.com/users/chriscoyier/repos')
  .then(response => response.json())
  .then(data => {
    // Here's a list of repos!
    console.log(data)
  }); */

//Sending data with fetch

let content = {some: 'content'};

// The actual fetch request
fetch('some-url', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(content)
})
// .then()..

var root = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
