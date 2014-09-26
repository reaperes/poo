Game = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var hero = new Character();
  var poo = new Poo();

  this.init = function () {
  };

  function update() {
    poo.update();
    if (leftKeyPressed ^ rightKeyPressed)
      leftKeyPressed ? hero.move('left') : hero.move('right');
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
  function loop() {
    clear();
    update();
    render();
    requestAnimationFrame(loop, canvas);
  }

  /**
   * Key handler
   */
  var leftKeyPressed = false;
  var rightKeyPressed = false;
  function onKeyDown(event) {
    switch(event.keyCode) {
      case 37: // left
        leftKeyPressed = true;
        break;
      case 39: // right
        rightKeyPressed = true;
        break;
    }
  }
  
  function onKeyUp(event) {
    switch(event.keyCode) {
      case 37: // left
        leftKeyPressed = false;
        break;
      case 39: // right
        rightKeyPressed = false;
        break;
    }    
  }

  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('keyup', onKeyUp, true);
};