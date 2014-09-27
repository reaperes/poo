GameManager = function (game) {
  var item = 3;
  var isSpeedChanging = false;

  this.update = function () {
  };

  this.onPooDropped = function () {
    if (game.pooCount == MAX_POO_COUNT) return ;
    game.pooCount++;
  };

  this.triggerSpeedChange = function () {
    if (item == 0 || isSpeedChanging) return;
    isSpeedChanging = true;
    item--;
    SPEED -= 5;
    setTimeout(function() {
      SPEED += 5;
      isSpeedChanging = false;
    }, 3000);
  };
};