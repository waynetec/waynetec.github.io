/*
Javascript template
*/


let cnt = 0;

function flipIt(){
    cnt++;
    let coin = [
        "./images/heads.png",
        "./images/tails.png"
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

const btnFlip = document.getElementById('flipBtn');

btnFlip.addEventListener('click',flipIt);
