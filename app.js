
// Dice roll function that takes in value of the dice selected from the drop down
// and displays the number on the web page
diceRoll = () => {
    var dieSize = document.getElementById("diceType").value;
    var roll;
    if (dieSize === "Select") {
        document.getElementById("demo").innerHTML = "Please select die size";
    } else {
        roll = Math.floor((Math.random() * dieSize) + 1);
        var crit;
        if (roll === 20) {
            crit = '!!!!!!'
        } else {
            crit = '!'
        }
        document.getElementById("demo").innerHTML = "You rolled a: " + roll + crit;
    }
    return roll;
}

