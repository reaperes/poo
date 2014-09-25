var Game = function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  function clear() {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function update() {
  }

  function render() {
  }

  requestAnimationFrame(loop, canvas);
  function loop() {
    clear();
    update();
    render();
    requestAnimationFrame(loop, canvas);
  }
};