Scoreboard = function() {
  var div = document.createElement('div');
  div.id = 'count';
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.padding = '14px 16px';
  div.style.fontSize = '20px';
  div.style.fontWeight = '600';
  div.style.fontSmoothing = 'antialiased';
  div.style.webkitFontSmoothing = 'antialiased';
  div.style.borderRadius = '4px';
  div.style.display = 'inline-block';
  div.style.background = 'rgba(255, 255, 255, 0.7)';
  div.innerText = 0;
  document.body.appendChild(div);

  this.countUp = function (count) {
    div.innerText = parseInt(div.innerText) + count;
  }
};