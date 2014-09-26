Character = function () {
  var life = 0;
  var acceleration = 0;
  var velocity = 0;
  var position = 0;
  var img = new Image();
  img.src = 'images/standing-mario_15x28.png';

  this.update = function () {
    move();
  };

  this.render = function (context) {
    context.drawImage(img, position, window.innerHeight-28);
  };

  var move = function () {
    if (leftKeyPressed ^ rightKeyPressed) {
      // apply acceleration
      if (leftKeyPressed) acceleration = -0.2;
      else acceleration = 0.2;
    }
    else {
      // apply friction
      if (velocity > 0.6) acceleration = -0.4;
      else if (velocity < -0.6) acceleration = 0.4;
      else {acceleration = 0;velocity = 0;}
    }
    velocity += acceleration;
    position += velocity;
    if (position < 0) {
      position = velocity = acceleration = 0;
    }
    if (position > window.innerWidth - 15) {
      velocity = acceleration = 0;
      position = window.innerWidth - 15;
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
  }
};
