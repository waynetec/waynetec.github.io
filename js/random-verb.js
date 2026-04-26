const verbDiv = document.getElementById('verbDiv');
const verbBtn = document.getElementById('verbBtn');

function writeVerb(){
    let n = Math.floor(Math.random()* verbs.length);
    verbDiv.textContent = verbs[n];
}

document.addEventListener('DOMContentLoaded', function() {
    verbBtn.addEventListener('click', writeVerb);
    writeVerb();
});

