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
var letters = {
	'0' : [
		  [0,1,1,1,0],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [0,1,1,1,0]],
	'1' : [
		  [0,0,1,0,0],
		  [0,1,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,1,1,1,0]],
	'2' : [
		  [0,1,1,1,0],
		  [1,0,0,0,1],
		  [0,0,0,0,1],
		  [0,0,0,1,0],
		  [0,0,1,0,0],
		  [0,1,0,0,0],
		  [1,0,0,0,0],
		  [1,1,1,1,1]],
	'7' : [
		  [1,1,1,1,1],
		  [0,0,0,0,1],
		  [0,0,0,1,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0],
		  [0,0,1,0,0]],
	'B' : [
		  [1,1,1,1,0],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,1,1,1,0],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,1,1,1,0]],
	'o' : [
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,1,1,1,0],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [0,1,1,1,0]],
	'n' : [
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [1,1,1,1,0],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1],
		  [1,0,0,0,1]],
	'a' : [
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,1,1,1,0],
		  [0,0,0,0,1],
		  [0,1,1,1,1],
		  [1,0,0,0,1],
		  [0,1,1,1,1]],
	'e' : [
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,0,0,0,0],
		  [0,1,1,1,0],
		  [1,0,0,0,1],
		  [1,1,1,1,0],
		  [1,0,0,0,0],
		  [0,1,1,1,1]],
	'é' : [
		  [0,0,0,1,0],
		  [0,0,1,0,0],
		  [0,0,0,0,0],
		  [0,1,1,1,0],
		  [1,0,0,0,1],
		  [1,1,1,1,0],
		  [1,0,0,0,0],
		  [0,1,1,1,1]]
	};
	
function drawLetter(letterName, initialPositionLeft, initialPositionTop, ballSize){
	var letter = letters[letterName];
	for(var i = 0; i < letter.length; i++){
		for(var j=0; j < letter[i].length; j++){
			if(letter[i][j] !== 0){
				var elemSpan = d.createElement('span');
				elemSpan.style.cssText = 'left:' + (initialPositionLeft + (j * ballSize)) + 'px;\
				top:' + (initialPositionTop + (i * ballSize)) + 'px;\
				width:' + ballSize + 'px; height:' + ballSize + 'px;border-radius: ' + (ballSize / 2) + 'px;\
				animation-name:slidein' + getRandomInt(0,19);
				d.body.appendChild(elemSpan);
			}
		}
	}
}

function drawWord(word, positionTop, ballSize){	
	var w = window.innerWidth;
	var wordLetters = word.split('');
	var letterWidth = (ballSize + 2) * 5;
	var startLeft = (w / 2) - ((letterWidth * wordLetters.length) / 2);
	for (var i = 0; i < wordLetters.length; i++){
		if(wordLetters[i] != ' '){
			drawLetter(wordLetters[i], startLeft + (i * letterWidth), positionTop, ballSize);
		}
	}
}

var startTop = (window.innerHeight / 2) - (16 * 4);
drawWord("Bonne année", startTop - 80, 6);
drawWord("2017", startTop, 14);

var snowflakesDuration = [];

window.onload = function() {
    window.setTimeout(function() {
        document.getElementById("message").innerHTML = "Bonne année";
    }, 2500);
};

for(var i = 0; i < 190; i++){
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
