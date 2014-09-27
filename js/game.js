MAX_POO_COUNT = 30;

SPEED = 10.0;

Game = function () {
  var isDebug = true;

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var gameManager = new GameManager(this);

  /**
   * Core functions
   */

  this.init = function () {
  };

  this.onEnd = function () {
    loopStop = true;
  };

  function update() {
    gameManager.update();
  }

  function render() {
    gameManager.render(context);
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
    if (loopStop) return;
    stats.begin();
    clear();
    update();
    render();
    stats.end();
    requestAnimationFrame(debugLoop.bind(this), canvas);
  }
  debugLoop.bind(this);

  var onKeyDown = function (event) {
    gameManager.onKeyDown(event);
  };

  var onKeyUp = function (event) {
    gameManager.onKeyUp(event);
  };

  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('keyup', onKeyUp, true);
};