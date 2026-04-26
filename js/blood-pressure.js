var systolic = [];
var diastolic = [];
var pulse = [];

function addReading(){
    var s = document.getElementById("systolic").value;
    var d = document.getElementById("diastolic").value;
    var p = document.getElementById("pulse").value;
    
    if (!s || !d || !p) {
        alert("Please fill in all fields");
        return;
    }
    
    var sVal = parseFloat(s);
    var dVal = parseFloat(d);
    var pVal = parseFloat(p);
    
    if (isNaN(sVal) || isNaN(dVal) || isNaN(pVal)) {
        alert("Please enter valid numbers");
        return;
    }
    
    systolic.push(sVal);
    diastolic.push(dVal);
    pulse.push(pVal);
    
    var avgSys = 0;
    var avgDia = 0;
    var avgPul = 0;
    
    for(var i=0; i<systolic.length; i++){
        avgSys += systolic[i];              
    }
    for (var j = 0; j < diastolic.length; j++){
        avgDia += diastolic[j];
    }
    for (var k = 0; k < pulse.length; k++){
        avgPul += pulse[k];
    }

    avgSys = avgSys / systolic.length;
    avgDia = avgDia / diastolic.length;
    avgPul = avgPul / pulse.length;

    document.getElementById("averageSys").textContent = avgSys.toFixed(2);
    document.getElementById("averageDia").textContent = avgDia.toFixed(2);
    document.getElementById("averagePulse").textContent = avgPul.toFixed(2);
    document.getElementById("numOfReadings").textContent = systolic.length;
    
    document.getElementById("systolic").value = "";
    document.getElementById("diastolic").value = "";
    document.getElementById("pulse").value = "";
}

function clearReadings(){
    systolic = [];
    diastolic = [];
    pulse = [];
    document.getElementById("averageSys").textContent = "0";
    document.getElementById("averageDia").textContent = "0";
    document.getElementById("averagePulse").textContent = "0";
    document.getElementById("numOfReadings").textContent = "0";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-btn').addEventListener('click', addReading);
    document.getElementById('clear-btn').addEventListener('click', clearReadings);
});