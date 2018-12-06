function Rectangle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || CANVASMID - 100;
  this.y = y || 300;
  this.width = 200;
  this.height = 25;
  this.ctx.fillStyle = "#FF0000";
}

Rectangle.prototype.move = function() {
  this.x = Math.floor(Math.random() * (this.ctx.canvas.width - this.width));
  this.width = this.width * 0.9;
}

Rectangle.prototype.draw = function() {

  //this.animate();

  this.ctx.fillRect(
    this.x,
    this.y,
    this.width,
    this.height
  )
}






