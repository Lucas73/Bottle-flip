window.onload = function() {

  var canvas = document.getElementById("canvas");

  new Game(canvas).start();


  // canvas.addEventListener('click', function() {
  //   var clickX = window.event.clientX;
  //   var clickY = window.event.clientY;
  
  //   console.log(clickX, clickY);
  // });

};



//document.getElementById("score").innerHTML = "Muchas gracias";
