function draw()
{
    let dice = [
        "dice/one.png",
        "dice/two.png",
        "dice/three.png",
        "dice/four.png",
        "dice/five.png",
        "dice/six.png",

    ];
    var context = document.getElementById('drawDice').getContext("2d");

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
    }
    img.src = dice[Math.floor(Math.random() * dice.length)];

}

const btnDraw = document.getElementById('button-p');
const myBtn = document.createElement('button');
myBtn.textContent = 'Roll Dice';
myBtn.addEventListener('click',draw);
btnDraw.append(myBtn);

