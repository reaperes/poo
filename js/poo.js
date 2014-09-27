Poo = function (game) {
  this.x = Math.floor(Math.random() * (window.innerWidth - 27));
  this.y = - Math.floor(Math.random() * 100) - 27;
  var img = new Image();
  img.src = 'images/poo_27x23.png';

  this.update = function () {
    this.y += 10;
    if (this.y > window.innerHeight) {
      game.scoreboard.countUp(1);
      this.x = Math.floor(Math.random() * (window.innerWidth - 27));
      this.y = - Math.floor(Math.random() * 100) - 27;
    }
  };

  this.render = function (context) {
    context.drawImage(img, this.x, this.y);
  };
};
