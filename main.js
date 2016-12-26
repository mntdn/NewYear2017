/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max) {
    return Math.round((Math.random() * (max - min + 1) + min) * 10) / 10;
}

var d = document;
var letter0 = [
  [0,1,1,1,0],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [0,1,1,1,0],
];
var letter1 = [
  [0,0,1,0,0],
  [0,1,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,1,1,1,0],
];
var letter2 = [
  [0,1,1,1,0],
  [1,0,0,0,1],
  [0,0,0,0,1],
  [0,0,0,1,0],
  [0,0,1,0,0],
  [0,1,0,0,0],
  [1,0,0,0,0],
  [1,1,1,1,1],
];
var letter7 = [
  [1,1,1,1,1],
  [0,0,0,0,1],
  [0,0,0,1,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
];

function drawLetter(letter, text, initialPositionLeft, initialPositionTop){
  for(var i = 0; i < letter.length; i++){
    for(var j=0; j < letter[i].length; j++){
      if(letter[i][j] !== 0){
        var elemSpan = d.createElement('span');
        elemSpan.style.cssText = 'left:' + (initialPositionLeft + (j * 14)) + 'px;\
          top:' + (initialPositionTop + (i * 14)) + 'px;\
          animation-name:slidein' + getRandomInt(0,19);
        // if(letter[i][j] !== 0){
        //   var newContent = document.createTextNode(text);
        //   elemSpan.appendChild(newContent);
          elemSpan.className = 'ball';
        // } else {
        //   elemSpan.innerHTML = '&nbsp;'
        // }
        d.body.appendChild(elemSpan);
      }
    }
  }
}
var h = window.innerHeight;
var w = window.innerWidth;
var startLeft = (w / 2) - (320 / 2);
var startTop = (h / 2) - (16 * 4);
drawLetter(letter2, "2", startLeft + 0, startTop);
drawLetter(letter0, "0", startLeft + 80, startTop);
drawLetter(letter1, "1", startLeft + 160, startTop);
drawLetter(letter7, "7", startLeft + 240, startTop);

var snowflakesDuration = [];

for(var i = 0; i < 90; i++){
    var el = d.createElement('div');
	var randomLeft = getRandomInt(10, window.innerWidth - 10);
	var randomOpacity = Math.random();
    el.className = "snowflake";
    el.style.cssText = 'left:' + randomLeft + 'px; opacity:'+randomOpacity;
    el.setAttribute("id", "snow" + i);
	el.setAttribute("data-rand-left", randomLeft);
	el.setAttribute("data-rand-opacity", randomOpacity);
    d.body.appendChild(el);
    snowflakesDuration[i] = getRandomInt(2000,5000);
}

function snowAnimation(snowId){
    var el = d.getElementById("snow" + snowId);
    el.className = "snowflake";
	var randomLeft = getRandomInt(10, window.innerWidth - 10);
	var randomOpacity = Math.random()
    el.style.cssText = 'left:' + randomLeft + 'px; opacity:'+ randomOpacity;
	el.setAttribute("data-rand-left", randomLeft);
	el.setAttribute("data-rand-opacity", randomOpacity);
    window.setTimeout(function(){
        var el = d.getElementById("snow" + snowId);
        el.className = "snowflake" + getRandomInt(2,5);
        var duration = snowflakesDuration[snowId]/1000;
		var snowflakeSize = getRandomInt(14,24);
        el.style.cssText = 'top:' + window.innerHeight + 'px;\
            left:' + (parseInt(el.getAttribute("data-rand-left"), 10) + 100) + 'px;\
			width: ' + snowflakeSize + 'px; height: ' + snowflakeSize + 'px; background-size: '+ snowflakeSize + 'px;\
            opacity:'+el.getAttribute("data-rand-opacity")+';\
            transition-delay:' + getRandom(0,1) + 's;\
            transition-duration: '+duration+'s, '+duration+'s;';
    }, 50);
}

var intervalID = window.setTimeout(function(){
    for(var i = 0; i < snowflakesDuration.length; i++){
        var el = d.getElementById("snow" + i);
        el.className = "snowflake" + getRandomInt(2,5);
        var duration = snowflakesDuration[i]/1000;
		var snowflakeSize = getRandomInt(14,24);
        el.style.cssText = 'top:' + window.innerHeight + 'px;\
            left:' + (parseInt(el.getAttribute("data-rand-left"), 10) + 100) + 'px;\
			width: ' + snowflakeSize + 'px; height: ' + snowflakeSize + 'px; background-size: '+ snowflakeSize + 'px;\
            opacity:'+el.getAttribute("data-rand-opacity")+';\
            transition-delay:' + getRandom(0,1) + 's;\
            transition-duration: '+duration+'s, '+duration+'s;';
        var snowId = i;
        window.setInterval(snowAnimation, snowflakesDuration[snowId] + 500, snowId);
    }
}, 100);
