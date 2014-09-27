Energy = function () {
  var energy = 20;
  var usingEnergy = false;
  var restoring = false;

  var divEnergy = document.createElement('div');
  divEnergy.style.cssText = 'position:fixed;left:18px;top:80px;display:block;opacity:0.9;';

  var divEnergyText = document.createElement('div');
  divEnergyText.style.cssText = 'margin-bottom:8px;color:#d5c7c3;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;';
  divEnergyText.innerText = energy;

  var divEnergyGraph = document.createElement('div');
  divEnergyGraph.style.cssText = 'position:relative;width:36px;height:100px;padding:4px;background-color:#68533D;';

  var divEnergyBar = document.createElement('div');
  divEnergyBar.id = 'energyForegroundBar';
  divEnergyBar.style.cssText = 'position:absolute;bottom:4px;width:36px;height:0px;background-color:#bfae86';

  divEnergyGraph.appendChild(divEnergyBar);
  divEnergy.appendChild(divEnergyText);
  divEnergy.appendChild(divEnergyGraph);
  document.body.appendChild(divEnergy);

  this.render = function () {
    divEnergyBar.style.height = energy + 'px';
    divEnergyText.innerText = energy.toString();
  };

  this.increase = function () {
    if (usingEnergy) return;
    energy++;
    if (energy > 100) energy = 100;
  };

  function restoreSpeed() {
    if (SPEED >= SPEED_ORIGINAL) {
      usingEnergy = false;
      restoring = false;
      return;
    }
    restoring = true;
    SPEED += 1;
    setTimeout(restoreSpeed, 200);
  }

  this.update = function() {
    if (restoring) return ;
    if (spacePressed) {
      if (usingEnergy && --energy == 0)
        restoreSpeed();
      else if (energy > 10) {
        energy -= 5;
        usingEnergy = true;
        SPEED = 2.5;
      }
    }
    else
      if (usingEnergy)
        restoreSpeed();
  };

  var spacePressed = false;
  this.onKeyDown = function (event) {
    switch (event.keyCode) {
      case 32: // space
        spacePressed = true;
        break;
    }
  };

  this.onKeyUp = function (event) {
    switch (event.keyCode) {
      case 32: // space
        spacePressed = false;
        break;
    }
  };
};