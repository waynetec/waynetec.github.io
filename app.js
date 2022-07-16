const navDiv = document.getElementById("navigation-div");

var navUL = document.createElement("ul");
navUL.classList.add("nav-ul");

navDiv.append(navUL);

var myLinks = [
    [
        "Florida Lottery Number Generator",
        "https://waynetec.github.io/florida-lottery-generator/index.html"
    ],
    [
        "Powerball Number Generator",
        "https://waynetec.github.io/powerball-number-generator/index.html"
    ]
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