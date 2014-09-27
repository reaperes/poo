LevelManager = function (game) {
  this.onPooDropped = function () {
    if (game.pooCount == MAX_POO_COUNT) return ;
    game.pooCount++;
  }
};