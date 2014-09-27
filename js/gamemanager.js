GameManager = function (game) {
  var scoreboard = new Scoreboard();
  var hero = new Character();

  var pooCount = 1;
  var poos = new Array(MAX_POO_COUNT);
  for (var i=0; i<MAX_POO_COUNT; i++) {
    poos[i] = new Poo(this);
  }

  var energy = new Energy();

  this.update = function () {
    energy.update();
    hero.update();
    for (var i=0; i<pooCount; i++) poos[i].update();
    if (isCollision()) {
      game.onEnd();
    }
  };

  this.render = function (context) {
    scoreboard.render();
    energy.render();
    hero.render(context);
    for (var i=0; i<pooCount; i++) poos[i].render(context);
  };

  function isCollision() {
    for (var i=0; i<pooCount; i++) {
      if (poos[i].y + 23 < 573) continue;
      if (poos[i].x + 27 < hero.x) continue;
      if (hero.x + 15 < poos[i].x) continue;
      return true;
    }
    return false;
  }

  this.onPooDropped = function () {
    scoreboard.countUp(1);
    energy.increase();

    if (pooCount == MAX_POO_COUNT) return ;
    pooCount++;
  };

  this.onKeyDown = function (event) {
    energy.onKeyDown(event);
    hero.onKeyDown(event);
  };

  this.onKeyUp = function (event) {
    energy.onKeyUp(event);
    hero.onKeyUp(event);
  };
};