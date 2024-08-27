function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rEUaw2oebQ":
        Script1();
        break;
      case "6VyYwEbYCEE":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6JHcfOtlBfv');
const duration = 750;
const easing = 'ease-out';
const id = '5auRfHAcSGd';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('68uhR7HTxgd');
const duration = 750;
const easing = 'ease-out';
const id = '5addGjBF4uA';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
