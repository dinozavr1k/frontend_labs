let startGame = confirm("Start the game");
    
    if (startGame) {
        alert("Game is starting")
    }


let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

let question = prompt("Guess Number");


if (randomNum == question) {
    alert("true");
}
    else {
        alert("false")
    }


for (let i = 0; i < 3; i++) {
    let question = prompt("Guess Number");
  }





















