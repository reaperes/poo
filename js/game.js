Game = function () {
  var isDebug = true;

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var hero = new Character();
  var poos = new Array(10);
  for (var i=0; i<10; i++) {
    poos[i] = new Poo(this);
  }
  this.scoreboard = new Scoreboard();

  var loopStop = false;

  this.init = function () {
  };

  function update() {
    for (var i=0; i<poos.length; i++) poos[i].update();
    hero.update();
    if (isCollision()) {
      loopStop = true;
    }
  }

  function render() {
    for (var i=0; i<poos.length; i++) poos[i].render(context);
    hero.render(context);
  }

  /**
   * Game functions
   */

  function isCollision() {
    for (var i=0; i<poos.length; i++) {
      if (poos[i].y + 23 < window.innerHeight - 27) continue;
      if (poos[i].x + 27 < hero.x) continue;
      if (hero.x + 15 < poos[i].x) continue;
      console.log(poos[i].x + ' ' + hero.x);
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
    requestAnimationFrame(loop, canvas);
  }

  function debugLoop() {
    if (loopStop) return;
    stats.begin();
    clear();
    update();
    render();
    stats.end();
    requestAnimationFrame(debugLoop, canvas);
  }

  window.addEventListener('keydown', hero.onKeyDown, true);
  window.addEventListener('keyup', hero.onKeyUp, true);
};