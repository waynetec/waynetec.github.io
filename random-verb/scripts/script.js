/*
Javascript template
*/

const verbDiv = document.getElementById('verbDiv');
const verbBtn = document.getElementById('verbBtn');



verbBtn.addEventListener('click', writeVerb);

function writeVerb(){
    let n = Math.floor(Math.random()* verbs.length);
    verbDiv.textContent = verbs[n];
}

