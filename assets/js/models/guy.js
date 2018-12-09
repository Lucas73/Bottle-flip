function Guy(ctx) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width * 0.2;
  this.h = this.ctx.canvas.height * 0.25;

  this.img = new Image();
  this.img.src = 'assets/img/Bernard.png';
  this.img.frames = 6;
  this.img.frameIndex = 0;

  this.x = 0 - this.ctx.canvas.width * 0.2;;
  this.y = (this.ctx.canvas.height) - (this.ctx.canvas.height * 0.25);

  this.framesCounter = 0;
  position = this.x + (this.ctx.canvas.width * 0.2);
}

Guy.prototype.draw = function() {
  if (this.x > 0 && this.x < this.ctx.canvas.width + 700) {
    
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x - 600,
    this.y,
    this.w,
    this.h
  )
  }else{
    this.x = 0;
  }
};

Guy.prototype.move = function(bottle) {
  this.framesCounter += 1;
  this.x = this.x + 2;
  this.limits(bottle);


  if ((this.framesCounter % 20) === 0) {
    this.framesCounter = 0;
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
  // this.limits(bottle);
}

Guy.prototype.limits = function(bottle) {
  console.log(bottle.x + 500 - this.x);
if(this.x >= bottle.x + 450 && bottle.y >= 650 && bottle.x + 500 - this.x >= 0) {
  bottle.x = bottle.x + 2;
}else if(bottle.x >= this.ctx.canvas.width){
  bottle.x = CANVASMID;
}
}

