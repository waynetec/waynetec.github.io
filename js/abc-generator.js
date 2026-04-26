/*
Javascript template
*/

const chalkboard = document.getElementById('chalkboard');

for(let i = 32;i<127;i++)
{
    let letter = document.createElement('div');
    letter.setAttribute('class','ind-letter');
    //Put Ascii uppercase letters into upper array
    if(i>=65 && i<=90)
    {
        letter.append(String.fromCharCode(i));
        chalkboard.append(letter);
    }

    //Put Ascii lowercase letters into lower array
    if(i>=97 && i<=122)
    {
        letter.append(String.fromCharCode(i));
        chalkboard.append(letter);
    }
}

for(let j = 0; j<10; j++){
        let letter = document.createElement('div');
        letter.setAttribute('class','ind-letter');
        letter.append(String(j));
        chalkboard.append(letter);
}

