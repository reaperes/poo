Poo = function () {
  var x = 0;
  var y = 0;
  var img = new Image();
  img.src = 'images/poo_27x23.png';

  this.render = function (context) {
    context.drawImage(img, 0, 0);
  };
};
