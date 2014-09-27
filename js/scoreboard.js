Scoreboard = function() {
  var score = 0;
  var div = document.createElement('div');
  div.id = 'count';
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.left = '900px';
  div.style.width = '30px';
  div.style.padding = '14px 16px';
  div.style.fontSize = '20px';
  div.style.textAlign = 'right';
  div.style.fontWeight = '600';
  div.style.fontSmoothing = 'antialiased';
  div.style.webkitFontSmoothing = 'antialiased';
  div.style.borderRadius = '4px';
  div.style.display = 'inline-block';
  div.style.background = 'rgba(255, 255, 255, 0.7)';
  div.innerText = 0;
  document.body.appendChild(div);

  this.render = function () {
    div.innerText = score.toString();
  };

  this.countUp = function (count) {
    score += count;
  }
};