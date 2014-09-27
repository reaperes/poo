Poo = function (gameManager) {
  this.x = Math.floor(Math.random() * (window.innerWidth - 27));
  this.y = - Math.floor(Math.random() * 400) - 26.9;
  var img = new Image();
  img.src = 'images/poo_27x23.png';

  this.update = function () {
    this.y += SPEED;
    if (this.y > window.innerHeight) {
      gameManager.scoreboard.countUp(1);
      this.x = Math.floor(Math.random() * (window.innerWidth - 27));
      this.y = - Math.floor(Math.random() * 100) - 26.9;
      gameManager.onPooDropped();
    }
  };

  this.render = function (context) {
    context.drawImage(img, this.x, this.y);
  };
};
