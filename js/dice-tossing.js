const diceTable = document.getElementById("dice-table");
diceTable.classList.add("dice-table");

var die = [
    "\u2680",
    "\u2681",
    "\u2682",
    "\u2683",
    "\u2684",
    "\u2685"
];

function rollDice(dCnt){
    diceTable.textContent = '';
    
    var count = parseInt(dCnt) || 1;
    if (count < 1) count = 1;
    if (count > 100) count = 100;
    
    for(var i=0; i < count; i++){
        var diceDiv = document.createElement('div');
        diceDiv.classList.add('dice-div');
        var num = Math.floor(Math.random() * 6);

        diceDiv.textContent += die[num];
        diceTable.append(diceDiv);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var tossDice = document.getElementById("toss-dice");
    var quantityInput = document.getElementById("quantity-input");
    
    tossDice.addEventListener('click', function() {
        rollDice(quantityInput.value);
    });
    
    rollDice(quantityInput.value);
});
