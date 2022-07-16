/*
Javascript template
*/
const diceTable = document.getElementById("dice-table");
diceTable.classList.add("dice-table");
var btnDiv = document.getElementById("btn-div");

var die = [
"\u2680",
"\u2681",
"\u2682",
"\u2683",
"\u2684",
"\u2685"
]
var tossDice = document.getElementById("toss-dice");
function rollDice(dCnt){
diceTable.textContent='';

for(var i=0; i < dCnt; i++){
    diceDiv = document.createElement('div');
    diceDiv.classList.add('dice-div');
    var num = Math.round(Math.floor(Math.random() * 6 ),2);

    diceDiv.textContent += die[num];
    diceTable.append(diceDiv);
}
}
