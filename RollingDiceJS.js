function rollDice() {
    // Simulate rolling two 6-sided dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // Display the values of each die
    var resultElement = document.getElementById("result");
    resultElement.innerText = "Die 1: " + die1 + " Die 2: " + die2 + " ";

    // Display the combined total of the dice
    var total = die1 + die2;
    resultElement.innerText += " Total: " + total;
}

document.querySelectorAll("clickme").addEventListener('click', rollDice());