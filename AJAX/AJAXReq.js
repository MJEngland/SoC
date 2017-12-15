var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');
//listen for clicks
btn.addEventListener('click', function(){
  //make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange= function(){
    if (XHR.readyState == 4 && XHR.status == 200){
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
//JSON data is returned as a string. To convert it into a Javascript object we need to use JSON.parse
    }
  }

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
})
