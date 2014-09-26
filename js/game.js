Game = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var hero = new Character();

  this.init = function () {
  };

  function update() {
  }

  function render() {
    hero.render(ctx);
  }

  function clear() {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  this.run = loop();
  function loop() {
    clear();
    update();
    render();
    requestAnimationFrame(loop, canvas);
  }

  /**
   * Key handler
   */
  function onKeyDown(event) {
    switch(event.keyCode) {
      case 37: // left
        hero.onLeftKeyDown();
        break;
      case 39: // right
        hero.onRightKeyDown();
        break;
    }
  }

  window.addEventListener('keydown', onKeyDown, true);
};