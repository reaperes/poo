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

  ;(function() {
    function _onKeyDown() {console.error("'onKeyDown(event)' function is not defined.");}
    window.addEventListener('keydown', typeof onKeyDown === 'function' ? onKeyDown : _onKeyDown, false);
  })();
};