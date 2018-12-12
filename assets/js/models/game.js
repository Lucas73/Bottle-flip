
function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.intervalId = undefined;
  this.rect = new Rectangle(this.ctx, this.x, this.y);
  this.bottle = new Bottle(this.ctx, this.alive);
  this.background = new Background(this.ctx)
  this.guy = new Guy(this.ctx);
  this.comment = new Comment(this.ctx);
  this.score = 0;
  this.setEvents();
};

Game.prototype.start = function() {
  this.intervalId = setInterval(function() {
    this.clear();
    this.drawAll();
  }.bind(this), DRAW_INTERVAL_MS / 2);
};


Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};

Game.prototype.drawAll = function() {
  this.background.draw();
  this.background.move();
  this.bottle.limits(this.rect);
  this.rect.draw();
  this.comment.draw(this.bottle, this.rect);
  this.comment.move(this.bottle, this.rect);
  this.bottle.draw();
  this.guy.draw(this.bottle, this.rect);
  this.guy.move(this.bottle, this.rect);

  this.bottle.scoring();
};



Game.prototype.setEvents = function() {
  this.ctx.canvas.addEventListener('click', function(event) {
    if (this.bottle.y != 650 && this.bottle.x != 527.5){
      return
    }else{
    this.bottle.move(event.x - 200, event.y);
    new Audio("assets/sound/sonido-de-botella-saliendo.m4a").play();
    }
  }.bind(this));
}








