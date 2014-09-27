Energy = function () {
  var energy = 0;
  var usingEnergy = false;
  var divEnergyArr = [];

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

  this.update = function() {debugger;
    if (spacePressed) {
      if (usingEnergy) {
        energy--;
        if (energy == 0) {
          usingEnergy = false;
          SPEED = SPEED_ORIGINAL;
        }
      }
      else if (energy < 10) {
        return;
      }
      else {
        usingEnergy = true;
        SPEED = 2.0;
      }
    }
    else {
      if (usingEnergy) {
        usingEnergy = false;
        SPEED = SPEED_ORIGINAL;
      }
    }
  };

  var spacePressed = false;
  this.onKeyDown = function (event) {
    switch (event.keyCode) {
      case 32: // space
        spacePressed = true;
    }
  };

  this.onKeyUp = function (event) {
    switch (event.keyCode) {
      case 32: // space
        spacePressed = false;
    }
  };
};