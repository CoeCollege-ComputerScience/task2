

document.getElementById("random").onclick = function(){
    var num = Math.floor(Math.random() * 10);
    document.getElementById("temperature").value = num;
};


document.getElementById("f2c").onclick = function(){
    var f = document.getElementById("temperature").value;
    var c = (f - 32) / 1.8;
    var result = document.getElementById("result");

    result.innerHTML = c.toFixed(2) + " °C";

    if (f < 50) {
        result.style.color = "blue";
    }
    else if (f > 80) {
        result.style.color = "red";
    }
    else {
        result.style.color = "black";
    }
};

document.getElementById("c2f").onclick = function(){
    var c = document.getElementById("temperature").value;
    var f = (c * 1.8) + 32;
    var result = document.getElementById("result");

    result.innerHTML = f.toFixed(2) + " °F";

    if (c < 10) {
        result.style.color = "blue";
    }
    else if (c > 27) {
        result.style.color = "red";
    }
    else {
        result.style.color = "black";
    }
};

document.getElementById("m2k").onclick = function(){
    var miles = document.getElementById("miles").value;
    var kilometers = miles * 1.60934;

    document.getElementById("distanceResult").innerHTML =
        kilometers.toFixed(2) + " kilometers";
};


