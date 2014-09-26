Character = function () {
  var life = 0;
  var x = 0;
  var y = 0;
  var img = new Image();
  img.src = 'images/standing-mario_15x28.png';

  this.render = function (context) {
    context.drawImage(img, x, window.innerHeight-28);
  };

  this.move = function (direction) {
    switch(direction) {
      case 'left':
        x -= 10;
        break;
      case 'right':
        x += 10;
        break;
    }
  };
};
