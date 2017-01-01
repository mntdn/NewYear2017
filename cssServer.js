var express = require('express')
var app = express()

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/css', function (req, res) {
  var finalResult = '';
  for(var i = 0; i < 30; i++){
    finalResult += '@keyframes slidein'+i+' {\
      from {\
        left: '+getRandomInt(0,100)+'%;\
        top: '+getRandomInt(0,100)+'%;\
      }\
    }\
    ';
  }
  res.header("Content-type", "text/css");
  res.send(finalResult);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
