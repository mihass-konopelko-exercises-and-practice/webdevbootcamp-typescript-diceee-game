// Function called when the button is pressed.
function rollDice() {  
    resetDiceToOnePip();
    let player1result: number = Math.ceil(Math.random()*6);
    let player2result: number = Math.ceil(Math.random()*6);
    setTotalPipsOnDie(player1result, 1);
    setTotalPipsOnDie(player2result, 2);
    let results: string =  player1result != player2result ? 
        player1result > player2result ? "Player 1 Won" : "Player 2 Won" : "Draw";
    console.log(results);
    document.getElementById("result-header").innerText = results;
}

function setTotalPipsOnDie( numberOfPips: number, playerNumber: number) {
    // i = 1 because die already has one pip on it.
    for (let i = 1; i < numberOfPips; i++) {
        addPipToDie(playerNumber)
    }
}

function resetDiceToOnePip() {
    getDieObject(1).replaceChildren();
    getDieObject(2).replaceChildren();
    addPipToDie(1);
    addPipToDie(2);
}

function getDieObject(playerNumber) {
    let id: string = "die_" + playerNumber;
    return document.getElementById(id);
}

function addPipToDie(playerNumber) {
    const pipSpan = document.createElement("span");
    pipSpan.classList.add("pip");
    getDieObject(playerNumber).appendChild(pipSpan);
}