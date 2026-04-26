function draw()
{
    let dice = [
        "../img/dice-on-canvas/one.png",
        "../img/dice-on-canvas/two.png",
        "../img/dice-on-canvas/three.png",
        "../img/dice-on-canvas/four.png",
        "../img/dice-on-canvas/five.png",
        "../img/dice-on-canvas/six.png",
    ];
    var context = document.getElementById('drawDice').getContext("2d");

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
    }
    img.src = dice[Math.floor(Math.random() * dice.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    const btnDraw = document.getElementById('button-p');
    const myBtn = document.createElement('button');
    myBtn.textContent = 'Roll Dice';
    myBtn.addEventListener('click',draw);
    btnDraw.append(myBtn);
    draw();
});

