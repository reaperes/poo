GameManager = function (game) {
  var isSpeedChanging = false;

  this.update = function () {
  };

  this.onPooDropped = function () {
    if (game.pooCount == MAX_POO_COUNT) return ;
    game.pooCount++;
  };

  this.triggerSpeedChange = function () {
    if (isSpeedChanging) return;
    console.log('time');
    isSpeedChanging = true;
    SPEED -= 5;
    setTimeout(function() {
      SPEED += 5;
      isSpeedChanging = false;
    }, 3000);
  };
};