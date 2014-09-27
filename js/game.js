MAX_POO_COUNT = 30;

SPEED = 10.0;

Game = function () {
  var isDebug = true;

  var self = this;

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var gameManager = new GameManager(this);

  this.pooCount = 1;
  var poos = new Array(MAX_POO_COUNT);
  for (var i=0; i<MAX_POO_COUNT; i++) {
    poos[i] = new Poo(gameManager);
  }

  /**
   * Core functions
   */

  this.init = function () {
  };

  function update() {
    gameManager.update();
    for (var i=0; i<self.pooCount; i++) poos[i].update();
    if (isCollision()) {
      loopStop = true;
    }
  }

  function render() {
    gameManager.render(context);
    for (var i=0; i<self.pooCount; i++) poos[i].render(context);
  }

  /**
   * Game functions
   */

  function isCollision() {
    for (var i=0; i<self.pooCount; i++) {
      if (poos[i].y + 23 < window.innerHeight - 27) continue;
      if (poos[i].x + 27 < gameManager.hero.x) continue;
      if (gameManager.hero.x + 15 < poos[i].x) continue;
      return true;
    }
    return false;
  }

  /**
   * Render functions
   */

  function clear() {
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  this.run = loop;
  var loopStop = false;
  if (isDebug) {
    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    this.run = debugLoop;
  }

  function loop() {
    if (loopStop) return;
    clear();
    update();
    render();
    requestAnimationFrame(loop.bind(this), canvas);
  }
  loop.bind(this);

  function debugLoop() {
    console.log('speed: ' + SPEED + ', poo: ' + self.pooCount);
    if (loopStop) return;
    stats.begin();
    clear();
    update();
    render();
    stats.end();
    requestAnimationFrame(debugLoop.bind(this), canvas);
  }
  debugLoop.bind(this);

  /**
   * Keyboard controller
   */

  var onKeyDown = function (event) {
    switch(event.keyCode) {
      case 32: // space
        gameManager.triggerSpeedChange();
        break;
    }
    gameManager.hero.onKeyDown(event);
  };

  if (isDebug) {
    onKeyDown = function (event) {
      switch(event.keyCode) {
        case 32: // space
          gameManager.triggerSpeedChange();
          break;
        case 38: // up
          SPEED += 1;
          break;
        case 40: // down
          SPEED -= 1;
          break;
      }
      gameManager.hero.onKeyDown(event);
    };
  }

  var onKeyUp = function (event) {
    gameManager.hero.onKeyUp(event);
  };

  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('keyup', onKeyUp, true);
};