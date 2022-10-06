function rollDice() {
    resetDiceToOnePip();
    var player1result = Math.ceil(Math.random() * 6);
    var player2result = Math.ceil(Math.random() * 6);
    setTotalPipsOnDie(player1result, 1);
    setTotalPipsOnDie(player2result, 2);
    var results = player1result != player2result ?
        player1result > player2result ? "Player 1 Won" : "Player 2 Won" : "Draw";
    console.log(results);
    document.getElementById("result-header").innerText = results;
}
function setTotalPipsOnDie(numberOfPips, playerNumber) {
    for (var i = 1; i < numberOfPips; i++) {
        addPipToDie(playerNumber);
    }
}
function resetDiceToOnePip() {
    getDieObject(1).replaceChildren();
    getDieObject(2).replaceChildren();
    addPipToDie(1);
    addPipToDie(2);
}
function getDieObject(playerNumber) {
    var id = "die_" + playerNumber;
    return document.getElementById(id);
}
function addPipToDie(playerNumber) {
    var pipSpan = document.createElement("span");
    pipSpan.classList.add("pip");
    getDieObject(playerNumber).appendChild(pipSpan);
}
