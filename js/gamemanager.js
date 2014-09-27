GameManager = function (game) {
  var self = this;

  this.scoreboard = new Scoreboard();
  var hero = new Character();

  var pooCount = 1;
  var poos = new Array(MAX_POO_COUNT);
  for (var i=0; i<MAX_POO_COUNT; i++) {
    poos[i] = new Poo(this);
  }

  var item = 3;
  var isSpeedChanging = false;

  this.update = function () {
    hero.update();
    for (var i=0; i<pooCount; i++) poos[i].update();
    if (isCollision()) {
      game.onEnd();
    }
  };

  this.render = function (context) {
    hero.render(context);
    for (var i=0; i<pooCount; i++) poos[i].render(context);
  };

  function isCollision() {
    for (var i=0; i<pooCount; i++) {
      if (poos[i].y + 23 < window.innerHeight - 27) continue;
      if (poos[i].x + 27 < hero.x) continue;
      if (hero.x + 15 < poos[i].x) continue;
      return true;
    }
    return false;
  }

  this.onPooDropped = function () {
    if (pooCount == MAX_POO_COUNT) return ;
    pooCount++;
  };

  function triggerSpeedChange() {
    if (item == 0 || isSpeedChanging) return;
    isSpeedChanging = true;
    item--;
    SPEED -= 5;
    setTimeout(function() {
      SPEED += 5;
      isSpeedChanging = false;
    }, 3000);
  };

  this.onKeyDown = function (event) {
    switch(event.keyCode) {
      case 32: // space
        triggerSpeedChange();
        break;
    }
    hero.onKeyDown(event);
  };

  this.onKeyUp = function (event) {
    hero.onKeyUp(event);
  };
};