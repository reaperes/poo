Character = function () {
  var life = 0;
  var acceleration = 0;
  var velocity = 0;
  var position = 0;
  var img = new Image();
  img.src = 'images/standing-mario_15x28.png';

  this.update = function () {
    if (leftKeyPressed ^ rightKeyPressed)
      leftKeyPressed ? move('left') : move('right');
  };

  this.render = function (context) {
    context.drawImage(img, position, window.innerHeight-28);
  };

  var move = function (direction) {
    switch(direction) {
      case 'left':
        position -= 10;
        break;
      case 'right':
        position += 10;
        break;
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
