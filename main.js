

// create car object
// start will begin function (function start()?)
// 'up' key will move redCar by 1 unit / 'down' key will move blueCar by 1 unit
// first car to reach unit of 10 wins (finish line)
// text will display (display:none?) when the winner reach finish line

// if(movePosition.keyup) {
//   // TODO: Grab the value of the current margin-left
//   //TODO: Increment that value in a local variable
//   // TODO: set the margin-left value to the updated local variable


var blueCar = document.getElementById('blueCar');
blueCar.go = 0;

var redCar = document.getElementById('redCar');
redCar.go = 0;

var blueWon = document.getElementById('blueWon');
var redWon = document.getElementById('redWon');


document.addEventListener('keyup', function(event) {
  if(blueCar.go ===700) { blueWon.style.display = "block" ;return;}
    else if
      (redCar.go ===700) { redWon.style.display = "block";return;}
    else if
      (event.keyCode == 38) {
      blueCar.go += 50
      blueCar.style.marginLeft = blueCar.go + 'px';
      }
    else if (event.keyCode == 40) {
      redCar.go += 50
      redCar.style.marginLeft = redCar.go + 'px';
    }

})


