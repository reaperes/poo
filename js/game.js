Game = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var hero = new Character();
  var poos = new Array(10);
  for (var i=0; i<10; i++) {
    poos[i] = new Poo();
  }

  this.init = function () {
  };

  function update() {
    for (var i=0; i<poos.length; i++) poos[i].update();
    hero.update();
  }

  function render() {
    for (var i=0; i<poos.length; i++) poos[i].render(context);
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