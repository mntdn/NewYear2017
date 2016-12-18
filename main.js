/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
      // if(letter[i][j] !== 0){
        var elemSpan = d.createElement('span');
        elemSpan.style.cssText = 'left:' + (initialPositionLeft + (j * 14)) + 'px;\
          top:' + (initialPositionTop + (i * 16)) + 'px;\
          animation-name:slidein' + getRandomInt(0,19);
        if(letter[i][j] !== 0){
          var newContent = document.createTextNode(text);
          elemSpan.appendChild(newContent);
        } else {
          elemSpan.innerHTML = '&nbsp;'
        }
        d.body.appendChild(elemSpan);
      // }
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
