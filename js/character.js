Character = function () {
  var life = 0;
  var x = 0;
  var y = 0;
  var img = new Image();
  img.src = 'images/standing-mario.png';

  this.render = function (context) {
    context.drawImage(img, 0, 0);
  }
};
