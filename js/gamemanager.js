GameManager = function (game) {
  var self = this;

  this.scoreboard = new Scoreboard();
  this.hero = new Character();










  var item = 3;
  var isSpeedChanging = false;

  this.update = function () {
    self.hero.update();
  };

  this.render = function (context) {
    self.hero.render(context);
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