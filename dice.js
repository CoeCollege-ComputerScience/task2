document.getElementById("roll").onclick = function() {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("d1").src = "Dice/RedDie" + die1 + ".png";
    document.getElementById("d2").src = "Dice/RedDie" + die2 + ".png";

};