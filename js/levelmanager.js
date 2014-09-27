LevelManager = function (game) {
  this.onPooDropped = function () {
    if (game.pooCount == 40) return ;
    game.pooCount++;
  }
};