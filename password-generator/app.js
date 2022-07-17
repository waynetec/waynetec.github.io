
    var heading = document.getElementById("heading");
    var passOptions = document.getElementById("pass-options");
    var passResults = document.getElementById("pass-results");

    heading.textContent = "Password Generator";

    //====================================================================
    var symbolsList = document.getElementById("symbols-list");
    symbolsList.value = "?@^_!#%&$";
    var numbersCheckbox = document.getElementById("pass-numbers");
    //====================================================================
    var upper  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var symbols = [];
    var symbolOptions = document.getElementById("symbols-list");


    //array to store password choices
    var choices = [];




    function getAPassword(){
        var numberOfPasswords = document.getElementById("pass-quantity");
        var nop = Number(numberOfPasswords.value);
        passResults.innerHTML = '';
        for(var ii = 0; ii < nop; ii++) {


            //find out if options are checked
            var n = document.getElementById("pass-numbers");
            if (n.checked) {
                choices.push('n');
            }
            var l = document.getElementById("lower-case")
            if (l.checked) {
                choices.push('l');
            }
            var u = document.getElementById("upper-case")
            if (u.checked) {
                choices.push('u');
            }
            var s = document.getElementById("pass-symbols");
            if (s.checked) {
                //Get symbols from input form
                for (var i = 0; i < symbolsList.value.length; i++) {
                    symbols.push(symbolsList.value.charAt(i));
                }
                choices.push('s');
            }

            var len = document.getElementById("pass-length");
            var plen = Number(len.value);
            if (plen < 1) {
                plen = 1;
            }
            var password = '';
            for (var m = 0; m < plen; m++) {
                var c = Math.floor(Math.random() * choices.length);

                if (choices[c] == 'n') {
                    password += numbers[Math.floor(Math.random() * numbers.length)];
                }

                if (choices[c] == 'l') {
                    password += lower[Math.floor(Math.random() * lower.length)];
                }

                if (choices[c] == 'u') {
                    password += upper[Math.floor(Math.random() * upper.length)];
                }
                if (choices[c] == 's') {
                    password += symbols[Math.floor(Math.random() * symbols.length)];
                }
            }
            choices = [];
            passResults.innerHTML += "<div class='p-word'>" + password + "</div>";
        }
    }
