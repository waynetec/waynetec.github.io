const navDiv = document.getElementById("navigation-div");
const heading = document.getElementById("heading");

heading.textContent = "WAYNETEC";



var navUL = document.createElement("ul");
navUL.classList.add("nav-ul");

navDiv.append(navUL);

var myLinks = [
    [
        "Alphabet Generator",
        "https://waynetec.github.io/abc-generator/index.html",
        "Generate alphabet and number sheets for learning"
    ],
    [
        "Bible Memory Verses",
        "https://waynetec.github.io/bible-memory-verses/index.html",
        "Practice memorizing scripture"
    ],
    [
        "Blood Pressure Average",
        "https://waynetec.github.io/blood-pressure.html",
        "Track and average blood pressure readings"
    ],
    [
        "Communication Board",
        "https://waynetec.github.io/communication_board.html",
        "AAC communication board"
    ],
    [
        "Coin Tosser",
        "https://waynetec.github.io/coin-toss/index.html",
        "Flip a coin with animation"
    ],
    [
        "Dice Rolling Generator",
        "https://waynetec.github.io/dice-tossing/index.html",
        "Roll multiple dice"
    ],
    [
        "Florida Lottery Number Generator",
        "https://waynetec.github.io/florida-lottery-generator/index.html",
        "Generate Florida Lottery numbers"
    ],
    [
        "Password Generator",
        "https://waynetec.github.io/password-generator/index.html",
        "Create secure passwords"
    ],
    [
        "Powerball Number Generator",
        "https://waynetec.github.io/powerball-number-generator/index.html",
        "Generate Powerball numbers"
    ],
    [
        "Random Verb Generator",
        "https://waynetec.github.io/random-verb/",
        "Practice verb conjugations"
    ],
    [
        "Room Calculator",
        "https://waynetec.github.io/room-calculator/index.html",
        "Calculate room measurements"
    ],
    [
        "Shopping List",
        "https://waynetec.github.io/shopping-list/index.html",
        "Track items and prices"
    ],
    [
        "Single Dice Tosser",
        "https://waynetec.github.io/dice-on-cavas/index.html",
        "Roll one die on canvas"
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
        aHref.classList.add("nav-link");
        aHref.textContent = myLinks[i][0];
        
        navLI.append(aHref);
        
        if (myLinks[i][2]) {
            var desc = document.createElement("p");
            desc.classList.add("nav-desc");
            desc.textContent = myLinks[i][2];
            navLI.appendChild(desc);
        }
    }
    navUL.append(navLI);
}

document.title = "Wayne's Scripts & Tools";
