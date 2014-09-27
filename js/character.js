Character = function () {
  var _this = this;

  var life = 0;
  var acceleration = 0;
  var velocity = 0;
  this.x = 0;
  var img = new Image();
  img.src = 'images/standing-mario_15x28.png';

  this.update = function () {
    move();
  };

  this.render = function (context) {
    context.drawImage(img, this.x, 572);
  };

  var move = function () {
    if (leftKeyPressed ^ rightKeyPressed) {
      // apply acceleration
      if (leftKeyPressed) acceleration = - SPEED / 50;
      else acceleration = SPEED / 50;
    }
    else {
      // apply friction
      if (velocity > SPEED / 16) acceleration = - SPEED / 25;
      else if (velocity < - SPEED / 16) acceleration = SPEED / 25;
      else {acceleration = 0;velocity = 0;}
    }
    velocity += acceleration;
    _this.x += velocity;
    if (_this.x < 0) {
      _this.x = velocity = acceleration = 0;
    }
    if (_this.x > 985) {
      velocity = acceleration = 0;
      _this.x = 985;
    }
  };

  /**
   * Key handler
   */
  var leftKeyPressed = false;
  var rightKeyPressed = false;
  this.onKeyDown = function (event) {
    switch(event.keyCode) {
      case 37: // left
        leftKeyPressed = true;
        break;
      case 39: // right
        rightKeyPressed = true;
        break;
    }
  };

  this.onKeyUp = function (event) {
    switch(event.keyCode) {
      case 37: // left
        leftKeyPressed = false;
        break;
      case 39: // right
        rightKeyPressed = false;
        break;
    }
  };
};
