// function Background(ctx) {
//   this.ctx = ctx;
//   this.x = 0;
//   this.y = 0;


//   this.w = ctx.canvas.width;
//   this.h = ctx.canvas.height;
//   this.img = new Image();
//   this.img.src = "./assets/img/Drunken-clam-2.jpg";

// }

// Background.prototype.draw = function() {
//   this.ctx.drawImage(
//       this.img,
//       this.x,
//       this.y,
//       this.w,
//       this.h);
//   }

function Background(ctx) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width;
  this.h = this.ctx.canvas.height;

  this.img = new Image();
  this.img.src = 'assets/img/drunken2-back.png';
  this.img.frames = 3;
  this.img.frameIndex = 0;

  this.x = 0;
  this.y = 0;

  this.framesCounter = 0;

  // this.bullets = [];

  // this.setListeners();

  // 2 * (this.w / this.img.frames);
  // this.ctx.canvas.height - 1.25 * this.h;
}

Background.prototype.draw = function() {
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );


};

Background.prototype.move = function() {
  this.framesCounter += 1;

  if ((this.framesCounter % 80) === 0) {
    this.framesCounter = 0;
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }

  // this.bullets = this.bullets.filter(function(bullet) {
  //   bullet.move();

  //   // return !bullet.shouldRemove;
  // });
};

// Background.prototype.shoot = function() {
//   var bullet = new Bullet(
//     this.ctx,
//     this.x + (this.w / this.img.frames),
//     this.y + (this.h / 2)
//   );

//   this.bullets.push(bullet);
// };

// Background.prototype.SPACE = 32;

// Background.prototype.setListeners = function() {
//   document.onkeydown = function(event) {
//     switch (event.keyCode) {
//       case this.SPACE:
//         this.shoot();
//         break;
//     }
//   }.bind(this);
// };