
var titleDiv = document.getElementById("title-div");
var containerDiv = document.getElementById("container-div");
var disclaimerDiv = document.getElementById("disclaimer-div");
var refreshDiv = document.getElementById("refresh-div");
var refreshButton = document.createElement("button");

refreshButton.textContent = "Generate";
refreshButton.classList.add("refresh-button");
refreshDiv.append(refreshButton);

var clickRefresh = refreshButton.addEventListener('click', function(){document.location.reload()});

document.title = "Powerball Numbers Generator";
titleDiv.textContent = "Powerball Numbers Generator";
disclaimerDiv.textContent ="** This site is not affiliated with the Florida Lottery or the Powerball. This generator is just for fun and you assume all risk involved in using it. Using this generator to pick your numbers does not increase your odds of winning **";



var regularNumbers = 5;
var highestRegNumber = 62;
var highestPowNumber = 26;
var numbersDrawn = [];

for(var j = 0; j < regularNumbers; j++){

    var randomNumber = Math.round((Math.random() * highestRegNumber + 1),2);
    numbersDrawn.push(randomNumber);
    numbersDrawn.sort(sort);
}

numbersDrawn.sort(sort);

//Check for duplicates in array
for(var k=0; k < numbersDrawn.length; k++){
    if(numbersDrawn[k] == numbersDrawn[k-1] && k > 0){
        randomNumber = Math.round((Math.random() * highestRegNumber + 1),2);
        numbersDrawn[k] = randomNumber;
        numbersDrawn.sort(sort);
    }
}

for(var i = 0; i < regularNumbers; i++){
    var lotteryBall = document.createElement("div");
    lotteryBall.classList.add("lottery-ball");


    lotteryBall.textContent = numbersDrawn[i];

    containerDiv.append(lotteryBall);
}

var powerNumber = Math.round((Math.random() * highestPowNumber + 1),2);

var powerBall = document.createElement("div");
powerBall.classList.add("powerball-div");

containerDiv.append(powerBall);
powerBall.textContent = powerNumber;

//Sort function
function sort(a, b){return a-b;}