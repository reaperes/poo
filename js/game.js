Game = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var hero = new Character();
  var poo = new Poo();

  this.init = function () {
  };

  function update() {
    poo.update();
  }

  function render() {
    poo.render(context);
    hero.render(context);
  }

  function clear() {
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  this.run = loop;
  function loop() {debugger;
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