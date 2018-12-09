function Bottle(ctx) {
  this.img = new Image();
  this.img.src = "./assets/img/bottle-water.png";
  this.ctx = ctx;
  this.width = 70;
  this.height = 150;
  this.score = 0;

  this.x = CANVASMID - 35;
  this.y = this.ctx.canvas.height - this.height;

  this.vx = 0;
  this.vy = 0;
  this.g = 0;

  this.init = false;

  this.origin = {};

  this.destiny = {
    x: 0,
    y: 0
  };

  this.frame = 0;
  this.state = "init";
  this.drawCount = 0;

  this.alive = true;
  miObjeto = {
    value: 0
  };
  recordFinal = 0;
}

Bottle.prototype.draw = function() {
  this.x += this.vx;
  this.y += this.vy;

  if (this.y < 375) {
    this.vy += this.g;
  }

  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  this.drawCount++;

  this.animate();
};

Bottle.prototype.move = function(x, y) {
  this.moveToDestiny(x, y);
};

Bottle.prototype.scoring = function(score) {
  var element = document.getElementById("score");
  element.innerText = this.score;
};


Bottle.prototype.moveToDestiny = function(x, y) {
  this.vy = -9;
  this.g = 0.1;
  var width = x > this.x ? -(this.width / 2) : this.width / 2;

  this.vx = (x - this.x + width) * 0.01;
};

Bottle.prototype.limits = function(rect) {
  if (!this.alive) {
    return;
  }



  if (this.y >= this.ctx.canvas.height - this.height + 1) {
    this.alive = false;
    // this.getContinue();
    this.reStart(rect);
    this.bottleAlive = false;
    return false;
  } else if (
    this.y + this.height > rect.y && this.y + this.height < rect.y + rect.width &&
    this.vy > 0 && 
    this.x >= rect.x - this.width / 2 &&
    this.x < rect.x + rect.width - this.width / 2
  ) {
    this.y = rect.y - this.height;
    this.vx = 0;
    this.vy = 0;
    this.g = 0;
    this.getContinue(rect);
    this.addPoint();
    return true;
  }
};


Bottle.prototype.animate = function() {
  switch (this.state) {
    case "init":
      this.frame = 0;
      break;
    case "move":
      if (this.drawCount % 10 === 0) {
        this.frame++;
        if (this.frame > 5) {
          this.frame = 0;
        }

        this.drawCount = 0;
      }
      break;
  }
};

Bottle.prototype.getContinue = function(rect) {
  setTimeout(
    function() {
      rect.move();
      this.x = CANVASMID - 35;
      this.y = this.ctx.canvas.height - this.height;
      this.vx = 0;
      this.vy = 0;
      this.g = 0;
    }.bind(this),
    250
  );
};

Bottle.prototype.addPoint = function() {
  if (this.score > 0) {
    this.score = this.score + 1;
  } else {
    this.score = 1;
  }


// Guardo el objeto como un string

if (this.score > recordFinal) {
  recordFinal = this.score;
}

miObjeto.value = recordFinal;

localStorage.setItem('datos', JSON.stringify(miObjeto));

  var guardado = localStorage.getItem('datos');
  var record = JSON.parse(guardado);

  var element = document.getElementById("best-score");

  localStorage.setItem('datos', JSON.stringify(recordFinal));

  element.innerText = recordFinal;




};



Bottle.prototype.reStart = function(rect) {

  new Audio("assets/sound/caida-fallida.m4a").play();
      new Audio("assets/sound/risa-de-derrota.m4a").play();

 
  this.x = CANVASMID - 35;
  this.y = this.ctx.canvas.height - this.height;
  this.vx = 0;
  this.vy = 0;
  this.g = 0;
  this.score = 0;

  rect.x = CANVASMID - 100;
  rect.y = 300;
  rect.width = 200;
  rect.height = 25;
  this.alive = true;
}

// Gamificador de los puntos -------------->

// document.addEventListener('DOMContentLoaded', function() {
//   var score = getScore();
//   console.log(score);
// });

// function getScore() {
//   var score = localStorage.getItem('score') || '{}';
//   return JSON.parse(score);
// }

// function addScore(name, value) {
//   var score = getScore();

//   score[name] = value;

//   localStorage.setItem('score', JSON.stringify(score));
// }


// Gamificador de Fran <----------------

// window.onload = function() {
//   alert('SAVE STATE ON LOCAL STORAGE')
//   var temporalData = {
//       name: 'Lucas',
//       score: 23
//   }
//   saveState(temporalData)
//   setTimeout(function() {
//       var stateLoaded = loadState()
//       console.info('ESTADO CARGADO => ', stateLoaded)
//       alert('siguiente partida')
//       temporalData = {
//           name: 'Lucas',
//           score: 110
//       }
//       saveState(temporalData)
//   }.bind(this), 2000)
// }

// function saveState(data) {
//   localStorage.setItem('data', JSON.stringify(data))
// }

// function loadState() {
//   return JSON.parse(localStorage.getItem('data'))
// }

