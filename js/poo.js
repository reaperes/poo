Poo = function () {
  var x = Math.floor(Math.random() * (window.innerWidth - 27));
  var y = - Math.floor(Math.random() * 100) - 27;
  var img = new Image();
  img.src = 'images/poo_27x23.png';

  this.update = function () {
    y += 10;
    if (y > window.innerHeight) {
      x = Math.floor(Math.random() * (window.innerWidth - 27));
      y = - Math.floor(Math.random() * 100) - 27;
    }
  };

  this.render = function (context) {
    context.drawImage(img, x, y);
  };
};
