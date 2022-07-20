const navDiv = document.getElementById("navigation-div");
const heading = document.getElementById("heading");

heading.textContent = "WAYNETEC";



var navUL = document.createElement("ul");
navUL.classList.add("nav-ul");

navDiv.append(navUL);

var myLinks = [
    [
        "Random Verb Generator",   
        "https://waynetec.github.io/random-verb/" 
    ],
    [
        "Coin Tosser",
        "https://waynetec.github.io/coin-toss/index.html"
    ],
    [
        "Single Dice Tosser",
        "https://waynetec.github.io/dice-on-cavas/index.html"
    ],
    [
        "Bible Memory Verses",
        "https://waynetec.github.io/bible-memory-verses/index.html"
    ],
    [
        "Florida Lottery Number Generator",
        "https://waynetec.github.io/florida-lottery-generator/index.html"
    ],
    [
        "Powerball Number Generator",
        "https://waynetec.github.io/powerball-number-generator/index.html"
    ],
    [
        "Dice Rolling Generator",
        "https://waynetec.github.io/dice-tossing/index.html"
    ],
    [
        "Password Generator",
        "https://waynetec.github.io/password-generator/index.html"
    ],
]

for( var i = 0; i < myLinks.length; i++)
{
    var innerL = myLinks[i].length;

    for(var j=0; j < innerL; j++){
        var navLI = document.createElement("li");
        navLI.classList.add("nav-li");
        var aHref = document.createElement('a');
        aHref.setAttribute("href", myLinks[i][1]);
        aHref.textContent = myLinks[i][0];
        navLI.append(aHref);
    }
    navUL.append(navLI);
}

document.title = "Lottery number generators";
