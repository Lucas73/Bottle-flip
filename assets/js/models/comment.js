function Comment(ctx) {
  this.ctx = ctx;

  this.w = this.ctx.canvas.width * 0.15;
  this.h = this.ctx.canvas.height * 0.25;

  this.img = new Image();
  this.img.src = 'assets/img/Marco-comment.png';
  this.img.frames = 1;
  this.img.frameIndex = 0;

  this.x = 0 - this.ctx.canvas.width * 0.2;;
  this.y = (this.ctx.canvas.height) - (this.ctx.canvas.height * 0.25) - 200;

  this.framesCounter = 0;
  position = this.x + (this.ctx.canvas.width * 0.2);
}

Comment.prototype.draw = function() {
  if (this.x > 0 && this.x < this.ctx.canvas.width + 700) {
    
  this.ctx.drawImage(
    this.img,
    this.img.frameIndex,
    0,
this.img.width / this.img.frames,
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

Comment.prototype.move = function(bottle, rect) {
  this.framesCounter += 1;
  this.x = this.x + 2;
  // this.limits(bottle, rect);


  if ((this.framesCounter % 20) === 0) {
    this.framesCounter = 0;
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
}
