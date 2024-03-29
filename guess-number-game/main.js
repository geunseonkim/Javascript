let autoNumber = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
console.log(history);

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""});

function pickRandomNumber() {
    autoNumber = Math.floor(Math.random()*100)+1 ; // Math.random: 0~1 사이의 값을 Pick (1은 포함 x.). // Math.floor: 소숫점을 버려준다.
    //console.log("정답은", autoNumber)
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "Enter a number between 1 and 100.";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "This number has already been used.";
        return;
    }

    chances --;
    chanceArea.textContent = `number of chances: ${chances}`;
    //console.log("chances", chances);

    if (userValue < autoNumber) {
        resultArea.textContent = "Up!";
        //console.log("Up!")
    } else if (userValue > autoNumber) {
        resultArea.textContent = "Down!";
        //console.log("Down!")
    } else {
        resultArea.textContent = "You're right!";
        //console.log("You're right!")
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    // user input 창이 깨끗하게 정리.
    userInput.value = ""; //empty
    // 새로운 번호가 생성.
    pickRandomNumber();
    resultArea.textContent = "The results appear here!";

    gameOver = false;
    playButton.disabled = false;
    chances = 5;
    chanceArea.textContent = `number of chances: ${chances}`;
    history = [];
}

pickRandomNumber();






// 랜덤번호 지정.
// 유저가 번호를 입력한다. 그리고 Go 라는 버튼을 누름.
// 만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 < 유저 번호 Down!
// 랜덤 번호가 > 유저 번호 Up!
// Reset 버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다. (더 이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.