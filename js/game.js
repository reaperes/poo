Game = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var hero = new Character();
  var poo = new Poo();

  this.init = function () {
  };

  function update() {
    poo.update();
    hero.update();
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

  window.addEventListener('keydown', hero.onKeyDown, true);
  window.addEventListener('keyup', hero.onKeyUp, true);
};