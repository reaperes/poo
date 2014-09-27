Energy = function () {
  var energy = 0;
  var divEnergyArr = [];

  var divEnergy = document.createElement('div');
  divEnergy.style.cssText = 'position:fixed;left:18px;top:80px;display:block;opacity:0.9;';

  var divEnergyText = document.createElement('div');
  divEnergyText.style.cssText = 'margin-bottom:8px;color:#d5c7c3;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;';
  divEnergyText.innerText = energy;

  var divEnergyGraph = document.createElement('div');
  divEnergyGraph.style.cssText = 'position:relative;width:36px;height:100px;padding:4px;background-color:#68533D;';

  for (var i=0; i<100; i++) {
    var divEnergySpan = document.createElement('div');
    divEnergySpan.style.cssText = 'background-color:#bfae86;width:100%;height:1px;float:left;visibility:hidden;';
    divEnergyGraph.appendChild(divEnergySpan);
    divEnergyArr.push(divEnergySpan);
  }
  divEnergy.appendChild(divEnergyText);
  divEnergy.appendChild(divEnergyGraph);
  document.body.appendChild(divEnergy);

  this.increase = function () {
    debugger;
    energy++;
    if (energy > 100) energy = 100;
    divEnergyText.innerText = energy.toString();
    divEnergyArr[99-energy].style.visibility = 'visible';
  }
};