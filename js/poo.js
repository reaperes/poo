Poo = function () {
  var x = 0;
  var y = 0;
  var img = new Image();
  img.src = 'images/poo_27x23.png';

  this.update = function () {
    y += 10;
    if (y > window.innerHeight) y = -23;
  };

  this.render = function (context) {
    context.drawImage(img, x, y);
  };
};
