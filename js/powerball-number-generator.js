
var titleDiv = document.getElementById("title-div");
var containerDiv = document.getElementById("container-div");
var disclaimerDiv = document.getElementById("disclaimer-div");
var refreshDiv = document.getElementById("refresh-div");

var regularNumbers = 5;
var highestRegNumber = 69;
var highestPowNumber = 26;

function generateNumbers() {
    containerDiv.innerHTML = '';
    
    var numbersDrawn = [];
    
    while (numbersDrawn.length < regularNumbers) {
        var randomNumber = Math.floor(Math.random() * highestRegNumber) + 1;
        if (!numbersDrawn.includes(randomNumber)) {
            numbersDrawn.push(randomNumber);
        }
    }
    
    numbersDrawn.sort(function(a, b){return a - b});
    
    for(var i = 0; i < regularNumbers; i++){
        var lotteryBall = document.createElement("div");
        lotteryBall.classList.add("lottery-ball");
        lotteryBall.textContent = numbersDrawn[i];
        containerDiv.append(lotteryBall);
    }
    
    var powerNumber = Math.floor(Math.random() * highestPowNumber) + 1;
    
    var powerBall = document.createElement("div");
    powerBall.classList.add("powerball-div");
    powerBall.textContent = powerNumber;
    containerDiv.append(powerBall);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate-btn').addEventListener('click', generateNumbers);
    generateNumbers();
});