
function draw(){
  var context = document.getElementById('canvas').getContext('2d');
  context.fillStyle = 'green';
  context.fillRect(100,150,250,200);
  context.fillStyle = 'silver';
  context.fillRect(200,210,50,90);
  context.fillStyle = 'yellow';
  context.fillRect(120,175,20,20);
  context.fillStyle = 'yellow';
  context.fillRect(120,200,20,20);
  context.fillStyle = 'yellow';
  context.fillRect(145,200,20,20);
  context.fillStyle = 'yellow';
  context.fillRect(145,175,20,20);
}

window.onload = draw;
