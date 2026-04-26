let cnt = 0;

function flipIt(){
    cnt++;
    let coin = [
        "../img/coin-toss/heads.png",
        "../img/coin-toss/tails.png"
    ]
    
    const myCanvas = document.getElementById("coinTable").getContext('2d');
    const status = document.getElementById("status");

    let image = new Image();
    image.onload = function (){
        myCanvas.drawImage(image,0,0);
    }
    let n = Math.floor(Math.random() * coin.length);
    
    if(n==0){
        status.textContent = 'Heads' + ' - Flip Number: ' + cnt;
    }
    else{
        status.textContent = 'Tails'+ ' - Flip Number: ' + cnt;
    }
    
    image.src = coin[n];


}

document.addEventListener('DOMContentLoaded', function() {
    const btnFlip = document.getElementById('flipBtn');
    btnFlip.addEventListener('click',flipIt);
    flipIt();
});
