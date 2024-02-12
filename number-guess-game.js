let autoNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play)

function pickRandomNumber() {
    autoNumber = Math.floor(Math.random()*100)+1 ; // Math.random: 0~1 사이의 값을 Pick (1은 포함 x.). // Math.floor: 소숫점을 버려준다.
    console.log("정답", autoNumber)
}

function play() {
    let userValue = userInput.value;
    if(userValue < autoNumber) {
        resultArea.textContent = "Up!"
        console.log("Up!")
    } else if (userValue > autoNumber) {
        resultArea.textContent = "Down!"
        console.log("Down!")
    } else {
        resultArea.textContent = "You're right!"
        console.log("You're right!")
    }
}

pickRandomNumber();